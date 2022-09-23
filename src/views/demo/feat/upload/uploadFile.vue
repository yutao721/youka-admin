<template>
  <div class="app-container">

    <h3 class="text-3xl my-10">上传文件示例</h3>

    <div class="my-10">
      <h3 class="my-5">1.上传文件(组件默认值)</h3>
      <FileUpload v-model="fileList"></FileUpload>
    </div>

    <div class="my-10">
      <h3 class="my-5">2.上传文件(limit限制1个)</h3>
      <FileUpload v-model="fileList" :limit="limit"></FileUpload>
    </div>

    <div class="my-10">
      <h3 class="my-5">3.上传文件(文件大小限制)</h3>
      <FileUpload v-model="fileList" :fileSize="fileSize"></FileUpload>
    </div>

    <div class="my-10">
      <h3 class="my-5">4.上传文件(是否显示提示)</h3>
      <FileUpload v-model="fileList" :isShowTip="isShowTip"></FileUpload>
    </div>

    <div class="my-10">
      <h3 class="my-5">5.上传文件(是否禁用)</h3>
      <FileUpload v-model="fileList" :disabled="disabled"></FileUpload>
    </div>

    <div class="my-10">
      <h3 class="my-5">6.上传文件(是否支持多选文件)</h3>
      <FileUpload v-model="fileList" :multiple="multiple"></FileUpload>
    </div>

    <div class="my-10">
      <h3 class="my-5">7.上传文件(文件类型 仅支持doc)</h3>
      <FileUpload v-model="fileList" :fileType="fileType"></FileUpload>
    </div>

    <div class="my-10">
      <h3 class="my-5">7.上传文件(文件类型 仅支持doc)</h3>
      <editor v-model="mark"></editor>
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
        fileType: ['doc'],
        mark: 'sd'
      }
    }
  }
</script>

<style scoped>

</style>
