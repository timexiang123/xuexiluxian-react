import { HYRequestInstance } from '../index'
// 用户名密码登录
export function loginByPwd(username, password) {
  return HYRequestInstance.post({
    url: '/u/loginByJson',
    data: {
      username,
      password
    }
  })
}
// 获取用户信息
export function getUserInfo(token) {
  return HYRequestInstance.get({
    url: '/member/getInfo',
    headers: {
      requiredToken: true
    },
    params: {
      token
    }
  })
}
