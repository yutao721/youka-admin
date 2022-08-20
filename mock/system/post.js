module.exports = [

  {
    url: '/system/post/list',
    type: 'get',
    response: () => {
      return {
        'total': 4,
        'rows': [{
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2021-09-09 17:25:33',
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
        }, {
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2021-09-09 17:25:33',
          'updateBy': null,
          'updateTime': null,
          'remark': '',
          'params': {},
          'postId': 2,
          'postCode': 'se',
          'postName': '项目经理',
          'postSort': '2',
          'status': '0',
          'flag': false
        }, {
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2021-09-09 17:25:34',
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
        }, {
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2021-09-09 17:25:34',
          'updateBy': null,
          'updateTime': null,
          'remark': '',
          'params': {},
          'postId': 4,
          'postCode': 'user',
          'postName': '普通员工',
          'postSort': '4',
          'status': '0',
          'flag': false
        }],
        'code': 200,
        'msg': '查询成功'
      }
    }
  },

  {
    url: '/system/dict/data/type/sys_normal_disable',
    type: 'get',
    response: () => {
      return {
        'msg': '操作成功',
        'code': 200,
        'data': [{
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2021-09-09 17:26:59',
          'updateBy': null,
          'updateTime': null,
          'remark': '正常状态',
          'params': {},
          'dictCode': 6,
          'dictSort': 1,
          'dictLabel': '正常',
          'dictValue': '0',
          'dictType': 'sys_normal_disable',
          'cssClass': '',
          'listClass': 'primary',
          'isDefault': 'Y',
          'status': '0',
          'default': true
        }, {
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2021-09-09 17:27:00',
          'updateBy': null,
          'updateTime': null,
          'remark': '停用状态',
          'params': {},
          'dictCode': 7,
          'dictSort': 2,
          'dictLabel': '停用',
          'dictValue': '1',
          'dictType': 'sys_normal_disable',
          'cssClass': '',
          'listClass': 'danger',
          'isDefault': 'N',
          'status': '0',
          'default': false
        }]
      }
    }
  },


  {
    url: '/system/dict/data/type/sys_user_sex',
    type: 'get',
    response: () => {
      return {
        'msg': '操作成功',
        'code': 200,
        'data': [{
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2021-09-09 17:26:56',
          'updateBy': null,
          'updateTime': null,
          'remark': '性别男',
          'params': {},
          'dictCode': 1,
          'dictSort': 1,
          'dictLabel': '男',
          'dictValue': '0',
          'dictType': 'sys_user_sex',
          'cssClass': '',
          'listClass': '',
          'isDefault': 'Y',
          'status': '0',
          'default': true
        }, {
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2021-09-09 17:26:57',
          'updateBy': null,
          'updateTime': null,
          'remark': '性别女',
          'params': {},
          'dictCode': 2,
          'dictSort': 2,
          'dictLabel': '女',
          'dictValue': '1',
          'dictType': 'sys_user_sex',
          'cssClass': '',
          'listClass': '',
          'isDefault': 'N',
          'status': '0',
          'default': false
        }, {
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2021-09-09 17:26:57',
          'updateBy': null,
          'updateTime': null,
          'remark': '性别未知',
          'params': {},
          'dictCode': 3,
          'dictSort': 3,
          'dictLabel': '未知',
          'dictValue': '2',
          'dictType': 'sys_user_sex',
          'cssClass': '',
          'listClass': '',
          'isDefault': 'N',
          'status': '0',
          'default': false
        }]
      }
    }
  }

]
