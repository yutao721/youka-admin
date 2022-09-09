const Mock = require('mockjs')
module.exports = [
  // 生成路由
  {
    url: '/getRouters',
    type: 'get',
    response: (config) => {
      return {
        'msg': '操作成功',
        'code': 200,
        'data': [
          {
            'name': 'System',
            'path': '/system',
            'hidden': false,
            'redirect': 'noRedirect',
            'component': 'Layout',
            'alwaysShow': true,
            'meta': { 'title': '系统管理', 'icon': 'system', 'noCache': false, 'link': null },
            'children': [
              {
                'name': 'User',
                'path': 'user',
                'hidden': false,
                'component': 'system/user/index',
                'meta': { 'title': '用户管理', 'icon': 'user', 'noCache': false, 'link': null }
              }, {
                'name': 'Role',
                'path': 'role',
                'hidden': false,
                'component': 'system/role/index',
                'meta': { 'title': '角色管理', 'icon': 'peoples', 'noCache': false, 'link': null }
              }, {
                'name': 'Menu',
                'path': 'menu',
                'hidden': false,
                'component': 'system/menu/index',
                'meta': { 'title': '菜单管理', 'icon': 'tree-table', 'noCache': false, 'link': null }
              }, {
                'name': 'Dept',
                'path': 'dept',
                'hidden': false,
                'component': 'system/dept/index',
                'meta': { 'title': '部门管理', 'icon': 'tree', 'noCache': false, 'link': null }
              }, {
                'name': 'Post',
                'path': 'post',
                'hidden': false,
                'component': 'system/post/index',
                'meta': { 'title': '岗位管理', 'icon': 'post', 'noCache': false, 'link': null }
              }, {
                'name': 'Dict',
                'path': 'dict',
                'hidden': false,
                'component': 'system/dict/index',
                'meta': { 'title': '字典管理', 'icon': 'dict', 'noCache': false, 'link': null }
              }, {
                'name': 'Config',
                'path': 'config',
                'hidden': false,
                'component': 'system/config/index',
                'meta': { 'title': '参数设置', 'icon': 'edit', 'noCache': false, 'link': null }
              }, {
                'name': 'Notice',
                'path': 'notice',
                'hidden': false,
                'component': 'system/notice/index',
                'meta': { 'title': '通知公告', 'icon': 'message', 'noCache': false, 'link': null }
              }]
          },

          {
            'name': 'Tool',
            'path': '/tool',
            'hidden': false,
            'redirect': 'noRedirect',
            'component': 'Layout',
            'alwaysShow': true,
            'meta': { 'title': '系统工具', 'icon': 'tool', 'noCache': false, 'link': null },
            'children': [
              {
                'name': 'Build',
                'path': 'build',
                'hidden': false,
                'component': 'tool/build/index',
                'meta': { 'title': '表单构建', 'icon': 'build', 'noCache': false, 'link': null }
              }
            ]
          }
        ]
      }
    }
  }
]
