module.exports = [

  // 查询部门列表
  {
    url: '/system/dept/list',
    type: 'get',
    response: () => {
      return {
        'msg': '操作成功',
        'code': 200,
        'data': [{
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2022-08-01 12:00:15',
          'updateBy': null,
          'updateTime': null,
          'remark': null,
          'params': {},
          'deptId': 100,
          'parentId': 0,
          'ancestors': '0',
          'deptName': '若依科技',
          'orderNum': 0,
          'leader': '若依',
          'phone': '15888888888',
          'email': 'ry@qq.com',
          'status': '0',
          'delFlag': '0',
          'parentName': null,
          'children': []
        }, {
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2022-08-01 12:00:15',
          'updateBy': null,
          'updateTime': null,
          'remark': null,
          'params': {},
          'deptId': 101,
          'parentId': 100,
          'ancestors': '0,100',
          'deptName': '深圳总公司',
          'orderNum': 1,
          'leader': '若依',
          'phone': '15888888888',
          'email': 'ry@qq.com',
          'status': '0',
          'delFlag': '0',
          'parentName': null,
          'children': []
        }, {
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2022-08-01 12:00:15',
          'updateBy': null,
          'updateTime': null,
          'remark': null,
          'params': {},
          'deptId': 102,
          'parentId': 100,
          'ancestors': '0,100',
          'deptName': '长沙分公司',
          'orderNum': 2,
          'leader': '若依',
          'phone': '15888888888',
          'email': 'ry@qq.com',
          'status': '0',
          'delFlag': '0',
          'parentName': null,
          'children': []
        }, {
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2022-08-01 12:00:16',
          'updateBy': null,
          'updateTime': null,
          'remark': null,
          'params': {},
          'deptId': 103,
          'parentId': 101,
          'ancestors': '0,100,101',
          'deptName': '研发部门',
          'orderNum': 1,
          'leader': '若依',
          'phone': '15888888888',
          'email': 'ry@qq.com',
          'status': '0',
          'delFlag': '0',
          'parentName': null,
          'children': []
        }, {
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2022-08-01 12:00:16',
          'updateBy': null,
          'updateTime': null,
          'remark': null,
          'params': {},
          'deptId': 104,
          'parentId': 101,
          'ancestors': '0,100,101',
          'deptName': '市场部门',
          'orderNum': 2,
          'leader': '若依',
          'phone': '15888888888',
          'email': 'ry@qq.com',
          'status': '0',
          'delFlag': '0',
          'parentName': null,
          'children': []
        }, {
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2022-08-01 12:00:16',
          'updateBy': null,
          'updateTime': null,
          'remark': null,
          'params': {},
          'deptId': 105,
          'parentId': 101,
          'ancestors': '0,100,101',
          'deptName': '测试部门',
          'orderNum': 3,
          'leader': '若依',
          'phone': '15888888888',
          'email': 'ry@qq.com',
          'status': '0',
          'delFlag': '0',
          'parentName': null,
          'children': []
        }, {
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2022-08-01 12:00:16',
          'updateBy': null,
          'updateTime': null,
          'remark': null,
          'params': {},
          'deptId': 106,
          'parentId': 101,
          'ancestors': '0,100,101',
          'deptName': '财务部门',
          'orderNum': 4,
          'leader': '若依',
          'phone': '15888888888',
          'email': 'ry@qq.com',
          'status': '0',
          'delFlag': '0',
          'parentName': null,
          'children': []
        }, {
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2022-08-01 12:00:17',
          'updateBy': null,
          'updateTime': null,
          'remark': null,
          'params': {},
          'deptId': 107,
          'parentId': 101,
          'ancestors': '0,100,101',
          'deptName': '运维部门',
          'orderNum': 5,
          'leader': '若依',
          'phone': '15888888888',
          'email': 'ry@qq.com',
          'status': '0',
          'delFlag': '0',
          'parentName': null,
          'children': []
        }, {
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2022-08-01 12:00:17',
          'updateBy': null,
          'updateTime': null,
          'remark': null,
          'params': {},
          'deptId': 108,
          'parentId': 102,
          'ancestors': '0,100,102',
          'deptName': '市场部门',
          'orderNum': 1,
          'leader': '若依',
          'phone': '15888888888',
          'email': 'ry@qq.com',
          'status': '0',
          'delFlag': '0',
          'parentName': null,
          'children': []
        }, {
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2022-08-01 12:00:17',
          'updateBy': null,
          'updateTime': null,
          'remark': null,
          'params': {},
          'deptId': 109,
          'parentId': 102,
          'ancestors': '0,100,102',
          'deptName': '财务部门',
          'orderNum': 2,
          'leader': '若依',
          'phone': '15888888888',
          'email': 'ry@qq.com',
          'status': '0',
          'delFlag': '0',
          'parentName': null,
          'children': []
        }]
      }
    }
  },

  // 查询部门列表（排除节点）
  {
    url: '/system/dept/list/exclude/',
    type: 'get',
    response: () => {
      return { 'msg': '操作成功', 'code': 200, 'data': [] }
    }
  },


  // 查询部门详细
  {
    url: '/system/dept/',
    type: 'get',
    response: () => {
      return {
        'msg': '操作成功',
        'code': 200,
        'data': {
          'searchValue': null,
          'createBy': null,
          'createTime': null,
          'updateBy': null,
          'updateTime': null,
          'remark': null,
          'params': {},
          'deptId': 100,
          'parentId': 0,
          'ancestors': '0',
          'deptName': '若依科技',
          'orderNum': 0,
          'leader': '若依',
          'phone': '15888888888',
          'email': 'ry@qq.com',
          'status': '0',
          'delFlag': null,
          'parentName': null,
          'children': []
        }
      }
    }
  },

  // 查询部门下拉树结构
  {
    url: '/system/dept/treeselect',
    type: 'get',
    response: () => {
      return {
        'msg': '操作成功',
        'code': 200,
        'data': [{
          'id': 100,
          'label': '若依科技',
          'children': [{
            'id': 101,
            'label': '深圳总公司',
            'children': [{ 'id': 103, 'label': '研发部门' }, { 'id': 104, 'label': '市场部门' }, { 'id': 105, 'label': '测试部门' }, { 'id': 106, 'label': '财务部门' }, {
              'id': 107,
              'label': '运维部门'
            }]
          }, { 'id': 102, 'label': '长沙分公司', 'children': [{ 'id': 108, 'label': '市场部门' }, { 'id': 109, 'label': '财务部门' }] }]
        }]
      }
    }
  },


  // 新增菜单
  {
    url: '/system/dept',
    type: 'post',
    response: () => {
      return {
        'msg': '操作成功',
        'code': 200,
        'data': {}
      }
    }
  },

  // 修改菜单
  {
    url: '/system/dept',
    type: 'put',
    response: () => {
      return {
        'msg': '操作成功',
        'code': 200,
        'data': {}
      }
    }
  },

  // 删除菜单
  {
    url: '/system/dept/',
    type: 'delete',
    response: () => {
      return {
        'msg': '操作成功',
        'code': 200,
        'data': {}
      }
    }
  }

]
