import { HYRequestInstance } from '../index'
// 发送短信验证码
export function sendCaptcha(mobile) {
  return HYRequestInstance.get({
    url: '/sms/sendRegisterOrLoginCaptcha',
    params: {
      mobile
    }
  })
}
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
// 手机短信登录
export function loginByCaptcha(mobile, captcha) {
  return HYRequestInstance.post({
    url: '/u/loginByMobile',
    data: { mobile, captcha }
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
