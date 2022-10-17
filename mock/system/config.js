module.exports = [

  {
    url: '/system/config/configKey/sys.user.initPassword',
    type: 'get',
    response: () => {
      return {
        'msg': '123456',
        'code': 200
      }
    }
  }
]
