module.exports = [

  // 用户列表
  {
    url: '/system/user/list',
    type: 'get',
    response: () => {
      return {
        'total': 2,
        'rows': [{
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2021-09-09 17:25:28',
          'updateBy': null,
          'updateTime': null,
          'remark': '管理员',
          'params': {},
          'userId': 1,
          'deptId': 103,
          'userName': 'admin',
          'nickName': '若依',
          'email': 'ry@163.com',
          'phonenumber': '15888888888',
          'sex': '1',
          'avatar': '',
          'status': '0',
          'delFlag': '0',
          'loginIp': '223.84.91.51',
          'loginDate': '2022-02-21T10:57:15.000+08:00',
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
            'deptName': '研发部门',
            'orderNum': null,
            'leader': '若依',
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
        }, {
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2021-09-09 17:25:29',
          'updateBy': null,
          'updateTime': null,
          'remark': '测试员',
          'params': {},
          'userId': 2,
          'deptId': 105,
          'userName': 'ry',
          'nickName': '若依',
          'email': 'ry@qq.com',
          'phonenumber': '15666666666',
          'sex': '1',
          'avatar': '',
          'status': '0',
          'delFlag': '0',
          'loginIp': '183.156.115.88',
          'loginDate': '2022-02-21T10:50:15.000+08:00',
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
            'deptName': '测试部门',
            'orderNum': null,
            'leader': '若依',
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

  // 查询用户详细
  {
    url: '/system/user/[0-9]',
    type: 'get',
    response: () => {
      return {
        'msg': '操作成功',
        'code': 200,
        'roleIds': [2],
        'data': {
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2022-08-01 12:00:21',
          'updateBy': null,
          'updateTime': null,
          'remark': '测试员',
          'params': {},
          'userId': 2,
          'deptId': 105,
          'userName': 'ry',
          'nickName': '若依',
          'email': 'ry@qq.com',
          'phonenumber': '15666666666',
          'sex': '1',
          'avatar': '',
          'password': '$2a$10$7JB720yubVSZvUI0rEqK/.VqGOZTH.ulu33dHOiBE8ByOhJIrdAu2',
          'status': '0',
          'delFlag': '0',
          'loginIp': '59.174.226.82',
          'loginDate': '2022-10-17T15:10:37.000+08:00',
          'dept': {
            'searchValue': null,
            'createBy': null,
            'createTime': null,
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
            'phone': null,
            'email': null,
            'status': '0',
            'delFlag': null,
            'parentName': null,
            'children': []
          },
          'roles': [{
            'searchValue': null,
            'createBy': null,
            'createTime': null,
            'updateBy': null,
            'updateTime': null,
            'remark': null,
            'params': {},
            'roleId': 2,
            'roleName': '普通角色',
            'roleKey': 'common',
            'roleSort': '2',
            'dataScope': '2',
            'menuCheckStrictly': false,
            'deptCheckStrictly': false,
            'status': '0',
            'delFlag': null,
            'flag': false,
            'menuIds': null,
            'deptIds': null,
            'permissions': null,
            'admin': false
          }],
          'roleIds': null,
          'postIds': null,
          'roleId': null,
          'admin': false
        },
        'postIds': [2],
        'roles': [{
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
        'posts': [{
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2022-08-01 12:00:24',
          'updateBy': null,
          'updateTime': null,
          'remark': '',
          'params': {},
          'postId': 1,
          'postCode': 'ceo',
          'postName': '董事长',
          'postSort': '1',
          'status': '0',
          'flag': false
        }, { 'searchValue': null, 'createBy': 'admin', 'createTime': '2022-08-01 12:00:24', 'updateBy': null, 'updateTime': null, 'remark': '', 'params': {}, 'postId': 2, 'postCode': 'se', 'postName': '项目经理', 'postSort': '2', 'status': '0', 'flag': false }, {
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2022-08-01 12:00:24',
          'updateBy': null,
          'updateTime': null,
          'remark': '',
          'params': {},
          'postId': 3,
          'postCode': 'hr',
          'postName': '人力资源',
          'postSort': '3',
          'status': '0',
          'flag': false
        }, { 'searchValue': null, 'createBy': 'admin', 'createTime': '2022-08-01 12:00:25', 'updateBy': null, 'updateTime': null, 'remark': '', 'params': {}, 'postId': 4, 'postCode': 'user', 'postName': '普通员工', 'postSort': '4', 'status': '0', 'flag': false }]
      }
    }
  },

  // 新增用户 模拟
  {
    url: '/system/user',
    type: 'post',
    response: () => {
      return {
        'msg': '操作成功',
        'code': 200,
        data: {}
      }
    }
  },

  // 修改用户 模拟
  {
    url: '/system/user',
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
    url: '/system/user',
    type: 'delete',
    response: () => {
      return {
        'msg': '操作成功',
        'code': 200,
        data: {}
      }
    }
  },

  // 用户密码重置 模拟
  {
    url: '/system/user/resetPwd',
    type: 'put',
    response: () => {
      return {
        'msg': '操作成功',
        'code': 200,
        data: {}
      }
    }
  },

  // 用户状态修改 模拟
  {
    url: '/system/user/changeStatus',
    type: 'put',
    response: () => {
      return {
        'msg': '操作成功',
        'code': 200,
        data: {}
      }
    }
  },

  // 查询用户角色信心
  {
    url: '/system/user/authRole/[A-Za-z0-9]',
    type: 'get', //
    response: (req, res) => {
      return {
        'msg': '操作成功',
        'code': 200,
        'roles': [{
          'createBy': null,
          'createTime': '2023-02-03 11:11:33',
          'updateBy': null,
          'updateTime': null,
          'remark': '普通角色',
          'roleId': 2,
          'roleName': '普通角色',
          'roleKey': 'common',
          'roleSort': 2,
          'dataScope': '2',
          'menuCheckStrictly': true,
          'deptCheckStrictly': true,
          'status': '0',
          'delFlag': '0',
          'flag': true,
          'menuIds': null,
          'deptIds': null,
          'permissions': null,
          'admin': false
        }],
        'user': {
          'createBy': 'admin',
          'createTime': '2023-02-03 11:11:26',
          'updateBy': null,
          'updateTime': null,
          'remark': '测试员',
          'userId': 2,
          'deptId': 105,
          'userName': 'ry',
          'nickName': '若依',
          'email': 'ry@qq.com',
          'phonenumber': '15666666666',
          'sex': '1',
          'avatar': '',
          'password': '$2a$10$7JB720yubVSZvUI0rEqK/.VqGOZTH.ulu33dHOiBE8ByOhJIrdAu2',
          'status': '0',
          'delFlag': '0',
          'loginIp': '183.48.91.108',
          'loginDate': '2023-02-08T17:18:42.000+08:00',
          'dept': {
            'createBy': null,
            'createTime': null,
            'updateBy': null,
            'updateTime': null,
            'remark': null,
            'deptId': 105,
            'parentId': 101,
            'ancestors': '0,100,101',
            'deptName': '测试部门',
            'orderNum': 3,
            'leader': '若依',
            'phone': null,
            'email': null,
            'status': '0',
            'delFlag': null,
            'parentName': null,
            'children': []
          },
          'roles': [{
            'createBy': null,
            'createTime': null,
            'updateBy': null,
            'updateTime': null,
            'remark': null,
            'roleId': 2,
            'roleName': '普通角色',
            'roleKey': 'common',
            'roleSort': 2,
            'dataScope': '2',
            'menuCheckStrictly': false,
            'deptCheckStrictly': false,
            'status': '0',
            'delFlag': null,
            'flag': false,
            'menuIds': null,
            'deptIds': null,
            'permissions': null,
            'admin': false
          }],
          'roleIds': null,
          'postIds': null,
          'roleId': null,
          'admin': false
        }
      }
    }
  }
]
