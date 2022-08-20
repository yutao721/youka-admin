module.exports = [

  {
    url: '/node/group/list',
    type: 'get',
    response: () => {
      return {
        'total': 4,
        'rows': [
          {
            'groupName': '客户端编译机',
            'groupRobot': '1/1',
            'groupQuote': '1'
          },
          {
            'groupName': '预发布服务器',
            'groupRobot': '1/2',
            'groupQuote': '2'
          },
          {
            'groupName': '正式服务器',
            'groupRobot': '6/8',
            'groupQuote': '4'
          }
        ],
        'code': 200,
        'msg': '查询成功'
      }
    }
  }


]
