// 根据环境引入不同配置 process.env.VUE_APP_ENV
const environment = process.env.VUE_APP_ENV || 'production'
console.log(`读取${process.env.VUE_APP_ENV}环境的配置`)
const config = require('./env.' + environment)
module.exports = config
