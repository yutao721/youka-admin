module.exports = [

  // 用户列表
  {
    url: '/system/role/list',
    type: 'get',
    response: () => {
      return {
        'total': 2,
        'rows': [{
          'searchValue': null,
          'createBy': null,
          'createTime': '2022-08-01 12:00:28',
          'updateBy': null,
          'updateTime': null,
          'remark': '超级管理员',
          'params': {},
          'roleId': 1,
          'roleName': '超级管理员',
          'roleKey': 'admin',
          'roleSort': '1',
          'dataScope': '1',
          'menuCheckStrictly': true,
          'deptCheckStrictly': true,
          'status': '0',
          'delFlag': '0',
          'flag': false,
          'menuIds': null,
          'deptIds': null,
          'permissions': null,
          'admin': true
        }, {
          'searchValue': null,
          'createBy': null,
          'createTime': '2022-08-01 12:00:28',
          'updateBy': null,
          'updateTime': null,
          'remark': '普通角色',
          'params': {},
          'roleId': 2,
          'roleName': '普通角色',
          'roleKey': 'common',
          'roleSort': '2',
          'dataScope': '2',
          'menuCheckStrictly': true,
          'deptCheckStrictly': true,
          'status': '0',
          'delFlag': '0',
          'flag': false,
          'menuIds': null,
          'deptIds': null,
          'permissions': null,
          'admin': false
        }],
        'code': 200,
        'msg': '查询成功'
      }
    }
  },

  // 查询用户详细
  {
    url: '/system/role/2',
    type: 'get',
    response: () => {
      return {
        'msg': '操作成功',
        'code': 200,
        'data': {
          'searchValue': null,
          'createBy': null,
          'createTime': '2022-08-01 12:00:28',
          'updateBy': null,
          'updateTime': null,
          'remark': '普通角色',
          'params': {},
          'roleId': 2,
          'roleName': '普通角色',
          'roleKey': 'common',
          'roleSort': '2',
          'dataScope': '2',
          'menuCheckStrictly': true,
          'deptCheckStrictly': true,
          'status': '0',
          'delFlag': '0',
          'flag': false,
          'menuIds': null,
          'deptIds': null,
          'permissions': null,
          'admin': false
        }
      }
    }
  },

  // 新增 模拟
  {
    url: '/system/role',
    type: 'post',
    response: () => {
      return {
        'msg': '操作成功',
        'code': 200,
        data: {}
      }
    }
  },

  // 修改 模拟
  {
    url: '/system/role',
    type: 'put',
    response: () => {
      return {
        'msg': '操作成功',
        'code': 200,
        data: {}
      }
    }
  },

  // 删除用户 模拟
  {
    url: '/system/role',
    type: 'delete',
    response: () => {
      return {
        'msg': '操作成功',
        'code': 200,
        data: {}
      }
    }
  },

  // 查询角色已授权用户列表
  {
    url: '/system/role/authUser/allocatedList',
    type: 'put',
    response: () => {
      return {
        'total': 1,
        'rows': [{
          'searchValue': null,
          'createBy': null,
          'createTime': '2022-08-01 12:00:21',
          'updateBy': null,
          'updateTime': null,
          'remark': null,
          'params': {},
          'userId': 2,
          'deptId': 105,
          'userName': 'ry',
          'nickName': '若依',
          'email': 'ry@qq.com',
          'phonenumber': '15666666666',
          'sex': null,
          'avatar': null,
          'password': null,
          'status': '0',
          'delFlag': null,
          'loginIp': null,
          'loginDate': null,
          'dept': {
            'searchValue': null,
            'createBy': null,
            'createTime': null,
            'updateBy': null,
            'updateTime': null,
            'remark': null,
            'params': {},
            'deptId': 105,
            'parentId': null,
            'ancestors': null,
            'deptName': null,
            'orderNum': null,
            'leader': null,
            'phone': null,
            'email': null,
            'status': null,
            'delFlag': null,
            'parentName': null,
            'children': []
          },
          'roles': [],
          'roleIds': null,
          'postIds': null,
          'roleId': null,
          'admin': false
        }],
        'code': 200,
        'msg': '查询成功'
      }
    }
  },

  // 查询角色未授权用户列表
  {
    url: '/system/role/authUser/unallocatedList',
    type: 'put',
    response: () => {
      return {
        'total': 1,
        'rows': [{
          'searchValue': null,
          'createBy': null,
          'createTime': '2022-08-01 12:00:20',
          'updateBy': null,
          'updateTime': null,
          'remark': null,
          'params': {},
          'userId': 1,
          'deptId': 103,
          'userName': 'admin',
          'nickName': '若依',
          'email': 'ry@163.com',
          'phonenumber': '15888888888',
          'sex': null,
          'avatar': null,
          'password': null,
          'status': '0',
          'delFlag': null,
          'loginIp': null,
          'loginDate': null,
          'dept': {
            'searchValue': null,
            'createBy': null,
            'createTime': null,
            'updateBy': null,
            'updateTime': null,
            'remark': null,
            'params': {},
            'deptId': 103,
            'parentId': null,
            'ancestors': null,
            'deptName': null,
            'orderNum': null,
            'leader': null,
            'phone': null,
            'email': null,
            'status': null,
            'delFlag': null,
            'parentName': null,
            'children': []
          },
          'roles': [],
          'roleIds': null,
          'postIds': null,
          'roleId': null,
          'admin': true
        }],
        'code': 200,
        'msg': '查询成功'
      }
    }
  },

  // 角色状态修改 模拟
  {
    url: '/system/role/changeStatus',
    type: 'put',
    response: () => {
      return {
        'msg': '操作成功',
        'code': 200,
        data: {}
      }
    }
  },

  // 取消用户授权角色 模拟
  {
    url: '/system/role/authUser/cancel',
    type: 'put',
    response: () => {
      return {
        'msg': '操作成功',
        'code': 200,
        data: {}
      }
    }
  },

  // 批量取消用户授权角色 模拟
  {
    url: '/system/role/authUser/cancelAll',
    type: 'put',
    response: () => {
      return {
        'msg': '操作成功',
        'code': 200,
        data: {}
      }
    }
  },

  // 授权用户选择 模拟
  {
    url: '/system/role/authUser/selectAll',
    type: 'put',
    response: () => {
      return {
        'msg': '操作成功',
        'code': 200,
        data: {}
      }
    }
  }
]
