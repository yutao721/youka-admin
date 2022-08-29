import request from '@/utils/request'

// 获取oss
export function getOssSgn(query) {
  return request({
    url: '/getOssSign',
    method: 'get',
    params: query
  })
}
