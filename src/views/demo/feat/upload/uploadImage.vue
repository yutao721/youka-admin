<template>
  <div class="app-container">
    <div class="my-10">
      <h3 class="my-5">1.上传图片(组件默认值)</h3>
      <ImageUpload v-model="fileList"></ImageUpload>
    </div>

    <div class="my-10">
      <h3 class="my-5">2.上传图片(limit限制1张)</h3>
      <ImageUpload v-model="fileList" :limit="limit"></ImageUpload>
    </div>

    <div class="my-10">
      <h3 class="my-5">3.上传图片(文件大小限制)</h3>
      <ImageUpload v-model="fileList" :fileSize="fileSize"></ImageUpload>
    </div>

    <div class="my-10">
      <h3 class="my-5">4.上传图片(是否显示提示)</h3>
      <ImageUpload v-model="fileList" :isShowTip="isShowTip"></ImageUpload>
    </div>

    <div class="my-10">
      <h3 class="my-5">5.上传图片(是否禁用)</h3>
      <ImageUpload v-model="fileList" :disabled="disabled"></ImageUpload>
    </div>

    <div class="my-10">
      <h3 class="my-5">6.上传图片(是否支持多选文件)</h3>
      <ImageUpload v-model="fileList" :multiple="multiple"></ImageUpload>
    </div>

    <div class="my-10">
      <h3 class="my-5">7.上传图片(文件类型 仅支持png)</h3>
      <ImageUpload v-model="fileList" :fileType="fileType"></ImageUpload>
    </div>

  </div>
</template>

<script>
  // oss 上传图片组件
  import ImageUpload from '@/components/ImageUpload/uploadByOss'

  export default {
    components: { ImageUpload },
    data() {
      return {
        fileList: [
          {
            name: '1',
            url: 'https://zhuoyou-shop-test.oss-cn-hangzhou.aliyuncs.com/upload/images/avatar_1663653848646.png'
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
