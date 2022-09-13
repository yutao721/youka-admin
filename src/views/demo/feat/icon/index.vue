<template>
  <div class="app-container">
    <h3>Icon组件示例</h3>

    <el-card class="card-box" header="element-ui自带icon">
      <div class="flex justify-around">
        <i class="el-icon-edit"></i>
        <i class="el-icon-share"></i>
        <i class="el-icon-delete"></i>
      </div>
    </el-card>

    <el-card class="card-box" header="assets/icons中的svg">
      <div class="flex justify-around">
        <svg-icon icon-class="404"></svg-icon>
        <svg-icon icon-class="tree"></svg-icon>
        <svg-icon icon-class="user"></svg-icon>
      </div>
    </el-card>

    <el-card class="card-box" header="IconIfy 组件使用 (使用Icon组件icon)">
      <div class="flex justify-around">
        <Icon Icon="ion:layers-outline" :size="30"/>
        <Icon icon="ion:bar-chart-outline" :size="30"/>
        <Icon icon="ion:tv-outline" :size="30"/>
        <Icon icon="ant-design:copyright-twotone" :size="30"/>
        <Icon icon="ion:settings-outline" :size="30" color="red"/>
      </div>
    </el-card>

    <el-card class="card-box" header="IconIfy 组件使用(使用CIcon组件icon)">
      <div class="flex justify-around">
        <CIcon iconClass="ion:layers-outline" :size="30"/>
        <CIcon iconClass="ion:bar-chart-outline" :size="30"/>
        <CIcon iconClass="ion:tv-outline" :size="30"/>
        <CIcon iconClass="ion:settings-outline" :size="30" color="red"/>
        <CIcon iconClass="build|svg"/>
      </div>
    </el-card>


  </div>
</template>

<script>
  import IconSelect from '@/components/IconSelect'

  export default {
    data() {
      return {}
    },
    components: { IconSelect }
  }
</script>

<style scoped lang="scss">
  ::v-deep {
    .el-card {
      margin: 30px 0;
    }
  }
</style>
