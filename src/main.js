import Vue from 'vue'
import Cookies from 'js-cookie'
import Element from 'element-ui'
import elFormSchema from '@kummy/el-form-schema' // elFormSchema
import ElFormModel from '@/components/elFormModel' // ElFormModel
import 'windi.css'
import './assets/styles/element-variables.scss'
import '@/assets/styles/index.scss' // global css
import '@/assets/styles/public.scss' // public css
import App from './App.vue'
import store from './store/index.js' // vuex
import router from './router/index.js' // vue-router
import directive from './directive/index' // directive
import plugins from './plugins/index' // plugins 也是挂载了几个全局方法
import { download } from '@/utils/request'

import './assets/icons' // icon
import './permission' // permission control
import { getDicts } from '@/api/system/dict/data';
import { getConfigKey } from '@/api/system/config';
import { parseTime, resetForm, addDateRange, selectDictLabel, selectDictLabels, handleTree } from '@/utils/ruoyi';
import * as filters from './filters' // global filters
// 分页组件
import Pagination from '@/components/Pagination';
// 自定义表格工具组件
import RightToolbar from '@/components/RightToolbar'
// 富文本组件
import Editor from '@/components/Editor'
// 文件上传组件
import FileUpload from '@/components/FileUpload'
// 图片上传组件
import ImageUpload from '@/components/ImageUpload'
// 图片预览组件
import ImagePreview from '@/components/ImagePreview'
// 字典标签组件
import DictTag from '@/components/DictTag'
// 头部标签组件
import VueMeta from 'vue-meta'
// 字典数据组件
import DictData from '@/components/DictData'
// 自定义CIcon组件 包含svg和iconify
import CIcon from '@/components/Icon'

// 全局方法挂载
Vue.prototype.getDicts = getDicts
Vue.prototype.getConfigKey = getConfigKey
Vue.prototype.parseTime = parseTime
Vue.prototype.resetForm = resetForm
Vue.prototype.addDateRange = addDateRange
Vue.prototype.selectDictLabel = selectDictLabel
Vue.prototype.selectDictLabels = selectDictLabels
Vue.prototype.download = download
Vue.prototype.handleTree = handleTree

// 全局组件挂载
Vue.component('DictTag', DictTag)
Vue.component('Pagination', Pagination)
Vue.component('RightToolbar', RightToolbar)
Vue.component('Editor', Editor)
Vue.component('FileUpload', FileUpload)
Vue.component('ImageUpload', ImageUpload)
Vue.component('ImagePreview', ImagePreview)
Vue.component('CIcon', CIcon)

Vue.use(directive)
Vue.use(plugins)
Vue.use(VueMeta)
DictData.install()


// iconify 组件
import '@purge-icons/generated';
import { Icon } from '@iconify/vue2';

Vue.component('Icon', Icon)


/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// Element组件库
Vue.use(Element, { size: Cookies.get('size') || 'medium' })
// elFormSchema 表单组件 可配置参数   地址：https://github.com/lisiyizu/el-form-schema
Vue.use(elFormSchema)
// ElFormModel  表单组件 可配置参数   地址： https://www.npmjs.com/package/el-form-model
Vue.use(ElFormModel)

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
