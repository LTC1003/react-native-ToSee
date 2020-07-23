// export const BaseUrl = 'http://10.12.88.215:8080';
const baseUrl = 'http://10.12.88.215:8080'
module.exports = {
  baseUrl,
  config: {
    method: 'get',
    // 基础url前缀
    baseUrl: baseUrl,
    // 请求头信息Content-Type 默认设置json
    headers: {
      'Content-Type': 'application/json',
    },
    // 参数
    data: {},
    // 在超时前, 所有请求都会等待2500ms
    timeout: 2500,
    // 携带凭证
    withCredentials: false,
    // 返回数据类型
    responseType: 'json'
  }
}