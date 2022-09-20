<template>
  <div class="app-container">
    <div class="my-10">
      <h3 class="my-5">1.上传文件(组件默认值)</h3>
      <FileUpload v-model="fileList"></FileUpload>
    </div>

  </div>
</template>

<script>
  // oss 上传文件组件
  import FileUpload from '@/components/FileUpload/uploadByOss'

  export default {
    components: { FileUpload },
    data() {
      return {
        fileList: [
          {
            name: '1.text',
            url: 'https://zhuoyou-shop-test.oss-cn-hangzhou.aliyuncs.com/upload/images/新建文本文档_1663667207383.txt'
          }
        ],
        limit: 1,
        fileSize: 0.1,
        isShowTip: false,
        disabled: true,
        multiple: true,
        fileType: ['png']
      }
    }
  }
</script>

<style scoped>

</style>
