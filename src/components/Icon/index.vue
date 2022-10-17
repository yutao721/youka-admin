<template>
  <SvgIcon
      :iconClass="getSvgIcon"
      v-if="isSvgIcon"
      :class="[$attrs.class,className, 'anticon']"
  />
  <Icon v-else
        :icon="iconClass"
        :class="[$attrs.class, 'svg-icon app-iconify anticon',]"
  ></Icon>
</template>

<script>
  import SvgIcon from '../SvgIcon/index';
  import '@purge-icons/generated';
  import { Icon } from '@iconify/vue2';

  const SVG_END_WITH_FLAG = '|svg';
  export default {
    props: {
      // icon的名称
      iconClass: {
        type: String,
        required: true
      },
      // 自定义的class
      className: {
        type: String,
        default: ''
      }
    },
    components: { SvgIcon, Icon },
    data() {
      return {
        spin: true
      }
    },
    computed: {
      isSvgIcon() {
        return this.iconClass?.endsWith(SVG_END_WITH_FLAG)
      },
      getSvgIcon() {
        return this.iconClass?.replace(SVG_END_WITH_FLAG, '')
      }
    }
  }
</script>

<style scoped lang="scss">
  .app-iconify {
    display: inline-block;
  }

  span.iconify {
    display: block;
    min-width: 1em;
    min-height: 1em;
    border-radius: 100%;
  }
</style>
