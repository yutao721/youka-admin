const Mock = require('mockjs')


module.exports =  [
  // 验证码
  {
    url: '/captchaImage',
    type: 'get',
    response: () => {
      return {
        'msg': '操作成功',
        'img': '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',
        'code': 200,
        'captchaOnOff': true,
        'uuid': 'ce18d7b8845b45509c03fcbc41f03eb0'
      }
    }
  },

  // 登录
  {
    url: '/login',
    type: 'post',
    response: (config) => {

      return {
        'msg': '操作成功',
        'code': 200,
        'token': 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6Ijc0ODg1MjM4LTU2YjEtNDI0NC04MTdkLTExMTUxOGQ4NjliZSJ9.bD8a_wwjg9Zg5Wvv2K7URnXIb-Uc7dELwNPc6xRB1JEKjdfP8mHyoNCoGaCOWimDtOgMyz21rka9HPTamSHxLg'
      }
    }
  },

  {
    url: '/logout',
    type: 'post',
    response: (config) => {
      return {
        'msg': '操作成功',
        'code': 200,
        'token': 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6Ijc0ODg1MjM4LTU2YjEtNDI0NC04MTdkLTExMTUxOGQ4NjliZSJ9.bD8a_wwjg9Zg5Wvv2K7URnXIb-Uc7dELwNPc6xRB1JEKjdfP8mHyoNCoGaCOWimDtOgMyz21rka9HPTamSHxLg'
      }
    }
  },

  // 用户信息
  {
    url: '/getInfo',
    type: 'get',
    response: (config) => {
      return {
        'msg': '操作成功', 'code': 200,
        'permissions': ['*:*:*'], 'roles': ['admin'],
        'user': {
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
          'nickName': '若依11',
          'email': 'ry@163.com',
          'phonenumber': '15888888888',
          'sex': '1',
          'avatar': '',
          'status': '0',
          'delFlag': '0',
          'loginIp': '103.155.76.98',
          'loginDate': '2022-01-12T13:41:34.000+08:00',
          'dept': {
            'searchValue': null,
            'createBy': null,
            'createTime': null,
            'updateBy': null,
            'updateTime': null,
            'remark': null,
            'params': {},
            'deptId': 103,
            'parentId': 101,
            'ancestors': null,
            'deptName': '研发部门',
            'orderNum': '1',
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
            'roleId': 1,
            'roleName': '超级管理员',
            'roleKey': 'admin',
            'roleSort': '1',
            'dataScope': '1',
            'menuCheckStrictly': false,
            'deptCheckStrictly': false,
            'status': '0',
            'delFlag': null,
            'flag': false,
            'menuIds': null,
            'deptIds': null,
            'admin': true
          }],
          'roleIds': null,
          'postIds': null,
          'roleId': null,
          'admin': true
        }
      }
    }
  }

]
