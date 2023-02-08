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
            'meta': { 'title': '系统管理', 'icon': 'system|svg', 'noCache': false, 'link': null },
            'children': [
              {
                'name': 'User',
                'path': 'user',
                'hidden': false,
                'component': 'system/user/index',
                'meta': { 'title': '用户管理', 'icon': 'user|svg', 'noCache': false, 'link': null }
              }, {
                'name': 'Role',
                'path': 'role',
                'hidden': false,
                'component': 'system/role/index',
                'meta': { 'title': '角色管理', 'icon': 'peoples|svg', 'noCache': false, 'link': null }
              }, {
                'name': 'Menu',
                'path': 'menu',
                'hidden': false,
                'component': 'system/menu/index',
                'meta': { 'title': '菜单管理', 'icon': 'tree-table|svg', 'noCache': false, 'link': null }
              }, {
                'name': 'Dept',
                'path': 'dept',
                'hidden': false,
                'component': 'system/dept/index',
                'meta': { 'title': '部门管理', 'icon': 'tree|svg', 'noCache': false, 'link': null }
              }, {
                'name': 'Post',
                'path': 'post',
                'hidden': false,
                'component': 'system/post/index',
                'meta': { 'title': '岗位管理', 'icon': 'post|svg', 'noCache': false, 'link': null }
              },
              // {
              //   'name': 'Dict',
              //   'path': 'dict',
              //   'hidden': false,
              //   'component': 'system/dict/index',
              //   'meta': { 'title': '字典管理', 'icon': 'dict|svg', 'noCache': false, 'link': null }
              // }, {
              //   'name': 'Config',
              //   'path': 'config',
              //   'hidden': false,
              //   'component': 'system/config/index',
              //   'meta': { 'title': '参数设置', 'icon': 'edit|svg', 'noCache': false, 'link': null }
              // }, {
              //   'name': 'Notice',
              //   'path': 'notice',
              //   'hidden': false,
              //   'component': 'system/notice/index',
              //   'meta': { 'title': '通知公告', 'icon': 'message|svg', 'noCache': false, 'link': null }
              // }
            ]
          },

          {
            'name': 'Tool',
            'path': '/tool',
            'hidden': false,
            'redirect': 'noRedirect',
            'component': 'Layout',
            'alwaysShow': true,
            'meta': { 'title': '系统工具', 'icon': 'tool|svg', 'noCache': false, 'link': null },
            'children': [
              {
                'name': 'Build',
                'path': 'build',
                'hidden': false,
                'component': 'tool/build/index',
                'meta': { 'title': '表单构建', 'icon': 'build|svg', 'noCache': false, 'link': null }
              }
            ]
          }
        ]
      }
    }
  }
]
