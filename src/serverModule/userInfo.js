import axios from './axios'

// 发送短信
export const getSendCode = (params) => {
  return axios({
    url: '/api/code/login/send_code',
    method: 'get',
    params,
  })
}