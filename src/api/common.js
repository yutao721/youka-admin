import request from '@/utils/request'

// 获取oss
export function getOssSgn(query) {
  return request({
    url: 'http://shop-test.zhuoyou.com/api/v1/service/ossToken',
    method: 'get',
    params: query
  })
}
