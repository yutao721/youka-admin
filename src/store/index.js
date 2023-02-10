import Vue from 'vue'
import Vuex from 'vuex';
// 全局 如侧边栏
import app from './modules/app';
// 字典相关
import dict from './modules/dict';
// 用户相关 姓名、角色、权限、头像等等
import user from './modules/user';
// 页签相关
import tagsView from './modules/tagsView';
// 权限相关 路由
import permission from './modules/permission';
// 配置相关
import settings from './modules/settings';
// getters
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    dict,
    user,
    tagsView,
    permission,
    settings
  },
  getters
})

export default store
