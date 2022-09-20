/*
* oss上传图片和文件
* */

import { getOssSgn } from '@/api/common';
import path from 'path';
import axios from 'axios';


export async function uploadFile(type = 12, file, onUploadProgress, cancelToken) {
  if (!file || typeof file === 'string') {
    return file;
  }
  const { data: { accessid, policy, signature, host, dir } } = await getOssSgn({ type });
  const form = new FormData();
  form.append('OSSAccessKeyId', accessid);
  form.append('policy', policy);
  form.append('Signature', signature);
  const extname = path.extname(file.name);
  const basename = path.basename(file.name, extname);
  const filename = `${basename}_${Date.now()}${extname}`;
  form.append('key', `${dir}/${filename}`);
  form.append('file', file);

  const response = await axios.post(host, form, {
    onUploadProgress,
    cancelToken
  });

  if (response.status >= 200 && response.status < 300) {
    return `https:${host}/${dir}/${filename}`;
  }

  throw new Error(response.statusText);
}


export function extname(name) {
  return name.substring(name.lastIndexOf('.') + 1, name.length);
}
