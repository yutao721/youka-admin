<template>
  <div class="component-upload-image">
    <el-upload
        :action="uploadImgUrl"
        list-type="picture-card"
        :on-success="handleUploadSuccess"
        :before-upload="handleBeforeUpload"
        :limit="limit"
        :on-error="handleUploadError"
        :on-exceed="handleExceed"
        name="file"
        :on-remove="handleRemove"
        :show-file-list="true"
        :headers="headers"
        :file-list="fileList"
        :disabled="disabled"
        :multiple="multiple"
        :http-request="handleUploadImg"
        :on-preview="handlePictureCardPreview"
        :class="{hide: this.fileList.length >= this.limit}">
      <i class="el-icon-plus"></i>
    </el-upload>

    <!-- 上传提示 -->
    <div class="el-upload__tip" slot="tip" v-if="showTip">
      请上传
      <template v-if="fileSize"> 大小不超过 <b style="color: #f56c6c">{{ fileSize }}MB</b></template>
      <template v-if="fileType"> 格式为 <b style="color: #f56c6c">{{ fileType.join('/') }}</b></template>
      的文件
    </div>

    <el-dialog :visible.sync="dialogVisible"
               title="预览"
               width="800"
               append-to-body>
      <img :src="dialogImageUrl" style="display: block; max-width: 100%; margin: 0 auto"/>
    </el-dialog>
  </div>
</template>

<script>
  import { getToken } from '@/utils/auth';
  // 获取阿里云oss token api
  import { getOssSgn } from '@/api/common'
  import emitter from 'element-ui/lib/mixins/emitter';
  import { uploadFile } from '@/plugins/uploadFile';

  export default {
    mixins: [emitter],
    props: {
      value: [String, Object, Array],
      // 图片数量限制
      limit: {
        type: Number,
        default: 5
      },
      // 大小限制(MB)
      fileSize: {
        type: Number,
        default: 2
      },
      // 文件类型, 例如['png', 'jpg', 'jpeg']
      fileType: {
        type: Array,
        default: () => ['png', 'jpg', 'jpeg']
      },
      // 是否显示提示
      isShowTip: {
        type: Boolean,
        default: true
      },
      // 是否禁用
      disabled: {
        type: Boolean,
        default: false
      },
      // 是否支持多选文件
      multiple: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        hideUpload: false,
        baseUrl: process.env.VUE_APP_BASE_API,
        uploadImgUrl: process.env.VUE_APP_BASE_API + '/common/upload', // 上传的图片服务器地址
        headers: {
          Authorization: 'Bearer ' + getToken()
        },
        fileList: []
      };
    },
    watch: {
      value: {
        handler(val) {
          console.log(val);
          if (val) {
            // 首先将值转为数组
            const list = Array.isArray(val) ? val : this.value.split(',');
            // 然后将数组转为对象数组
            this.fileList = list.map(item => {
              if (typeof item === 'string') {
                if (item.indexOf(this.baseUrl) === -1) {
                  item = { name: this.baseUrl + item, url: item };
                } else {
                  item = { name: item, url: item };
                }
              }
              return item;
            });
          } else {
            this.fileList = [];
            return [];
          }
        },
        deep: true,
        immediate: true
      }
    },
    computed: {
      // 是否显示提示
      showTip() {
        return this.isShowTip && ( this.fileType || this.fileSize );
      }
    },
    methods: {
      // 生成随机数
      randomString(len) {
        len = len || 32
        const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
        const maxPos = chars.length
        let pwd = ''
        for (let i = 0; i < len; i++) {
          pwd += chars.charAt(Math.floor(Math.random() * maxPos))
        }
        return pwd
      },

      // 截取上传文件后缀
      getSuffix(filename) {
        let pos = filename.lastIndexOf('.')
        let suffix = ''
        if (pos != -1) suffix = filename.substring(pos)
        return suffix
      },

      handleUploadImg(file) {
        console.log(file)


        /* getOssSgn().then((res) => {
           console.log(res);
           if (res.code == 200) {
             let picName = this.randomString(10) + this.getSuffix(file.file.name)
             let keyValue = res.data.dir + picName;
             //注意formData里append添加的键的大小写
             let formData = new FormData()
             formData.append('name', file.file.name) // 文件名称
             formData.append('key', keyValue) // 存储在oss的文件路径
             formData.append('OSSAccessKeyId', res.data.accessid) // //accessKeyId
             formData.append('policy', res.data.policy) // policy
             formData.append('Signature', res.data.signature) //签名
             formData.append('success_action_status', 200)
             formData.append('file', file.file, file.file.name) // 如果是base64文件，那么直接把base64字符串转成blob对象进行上传即可

             this.progressFlag = true
             return new Promise((resolve, reject) => {
               let url = `https://${res.data.bucketName}.${res.data.host}`
               this.$axios.post(url, formData, {
                 headers: {
                   'Content-Type': 'multipart/form-data'
                 },
                 // 图片上传进度
                 onUploadProgress: (progressEvent) => {
                   this.progressPercent = Math.floor(( progressEvent.loaded * 100 ) / progressEvent.total)
                 }
               }).then((rep) => {
                 if (rep.status === 200) {
                   this.imageUrl = url + '/' + keyValue
                   // this.fileList.push({ name: file.file.name, url: this.imageUrl })
                   console.log(this.fileList)
                   this.$emit('input', this.listToString(this.fileList));
                   console.log('Uploaded successfully', rep)
                   this.loading.close();
                   if (this.progressPercent >= 100) {
                     this.progressFlag = false
                     setTimeout(() => {
                       this.progressPercent = 0
                     }, 1000)
                   }
                 }
                 resolve(rep)
               }).catch((err) => {
                 reject(err)
               })
             })
           }
         }).catch((err) => {
           console.log(err)
           this.loading.close();
         })*/

        uploadFile(12, file.file, (progressEvent) => {
          this.progressPercent = Math.floor(( progressEvent.loaded * 100 ) / progressEvent.total)
        }).then(imgUrl => {
          console.log(imgUrl);
          this.fileList.push({ name: file.file.name, url: imgUrl });

          this.$emit('input', this.listToString(this.fileList));
          this.dispatch('ElFormItem', 'el.form.change', this.listToString(this.fileList));
          this.dispatch('ElFormItem', 'el.form.blur', this.listToString(this.fileList));

          this.loading.close();
          if (this.progressPercent >= 100) {
            setTimeout(() => {
              this.progressPercent = 0
            }, 1000)
          }
        }).catch(err => {
          console.log(err)
          this.loading.close();
        })
      },

      // 删除图片
      handleRemove(file, fileList) {
        const findex = this.fileList.indexOf(file.name);
        this.fileList.splice(findex, 1);
        this.$emit('input', this.listToString(this.fileList));
      },

      // 上传成功回调
      handleUploadSuccess(res) {
        this.fileList.push({ name: res.fileName, url: res.fileName });
        this.$emit('input', this.listToString(this.fileList));
        this.loading.close();
      },

      // 上传前loading加载
      handleBeforeUpload(file) {
        console.log('!!!!!!!!!!!!!');
        let isImg = false;
        if (this.fileType.length) {
          let fileExtension = '';
          if (file.name.lastIndexOf('.') > -1) {
            fileExtension = file.name.slice(file.name.lastIndexOf('.') + 1);
          }
          isImg = this.fileType.some(type => {
            if (file.type.indexOf(type) > -1) return true;
            if (fileExtension && fileExtension.indexOf(type) > -1) return true;
            return false;
          });
        } else {
          isImg = file.type.indexOf('image') > -1;
        }

        if (!isImg) {
          this.$message.error(
            `文件格式不正确, 请上传${this.fileType.join('/')}图片格式文件!`
          );
          return false;
        }
        if (this.fileSize) {
          const isLt = file.size / 1024 / 1024 < this.fileSize;
          if (!isLt) {
            this.$message.error(`上传头像图片大小不能超过 ${this.fileSize} MB!`);
            return false;
          }
        }
        this.loading = this.$loading({
          lock: true,
          text: '上传中',
          background: 'rgba(0, 0, 0, 0.7)'
        });
      },
      // 文件个数超出
      handleExceed() {
        this.$message.error(`上传文件数量不能超过 ${this.limit} 个!`);
      },
      // 上传失败
      handleUploadError() {
        this.$message({
          type: 'error',
          message: '上传失败'
        });
        this.loading.close();
      },
      // 预览
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      // 对象转成指定字符串分隔
      listToString(list, separator) {
        let strs = '';
        separator = separator || ',';
        for (let i in list) {
          strs += list[i].url + separator;
        }
        return strs != '' ? strs.substr(0, strs.length - 1) : '';
      }
    }
  };
</script>
<style scoped lang="scss">
  // .el-upload--picture-card 控制加号部分
  ::v-deep.hide .el-upload--picture-card {
    display: none;
  }

  // 去掉动画效果
  ::v-deep .el-list-enter-active,
  ::v-deep .el-list-leave-active {
    transition: all 0s;
  }

  ::v-deep .el-list-enter, .el-list-leave-active {
    opacity: 0;
    transform: translateY(0);
  }
</style>

