/**
 * 角色权限处理
 * 1. 单个
 *    <el-button v-hasRole="['admin']">管理员才能看到</el-button>
 * 2. 多个
 *    <el-button v-hasRole="['role1', 'role2']">包含角色才能看到</el-button>
 */

import store from '@/store'

export default {
  inserted(el, binding, vnode) {
    const { value } = binding
    const super_admin = 'admin';
    const roles = store.getters && store.getters.roles

    if (value && value instanceof Array && value.length > 0) {
      const roleFlag = value

      const hasRole = roles.some(role => {
        return super_admin === role || roleFlag.includes(role)
      })

      if (!hasRole) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(`请设置角色权限标签值"`)
    }
  }
}
