import * as actionTypes from './constances'
import { loginByPwd, getUserInfo, loginByCaptcha } from '@/service/modules/user'
import storage from '@/utils/storage'
import { successNotifiy } from '@/utils/utils'
import { history } from '@/utils/history'
// 用户名密码登录action
export function loginByPwdAction(username, password, cb) {
  return (dispatch) => {
    loginByPwd(username, password)
      .then((res) => {
        if (res.accessToken) {
          // 存到本地缓存中去
          storage.setStorage('token', res.accessToken)
          // 存到redux中去
          dispatch({
            type: actionTypes.LOGIN_BY_PWD,
            token: res.accessToken
          })
          // 成功提示
          successNotifiy('登录成功')
          setTimeout(() => {
            history.replace('/')
          }, 1000)
        }
      })
      .catch((err) => {
        cb()
        console.log('登录失败', err)
      })
  }
}
// 手机短信登录action
export function loginByCaptchaAction(mobile, captcha, cb) {
  return (dispatch) => {
    loginByCaptcha(mobile, captcha)
      .then((res) => {
        if (res.accessToken) {
          // 存到本地缓存中去
          storage.setStorage('token', res.accessToken)
          // 存到redux中去
          dispatch({
            type: actionTypes.LOGIN_BY_CAPTCHA,
            token: res.accessToken
          })
          // 成功提示
          successNotifiy('登录成功')
          setTimeout(() => {
            history.replace('/')
          }, 1000)
        }
      })
      .catch((err) => {
        cb()
        console.log('登录失败', err)
      })
  }
}

// 获取用户信息Action
export function getUserInfoAction(token) {
  return (dispatch) => {
    getUserInfo(token)
      .then((res) => {
        if (res.data) {
          // 存到本地缓存中去
          storage.setStorage('userInfo', res.data)
          //  存到redux中去
          dispatch({
            type: actionTypes.GET_USERINFO,
            userInfo: res.data
          })
        }
      })
      .catch((err) => {
        console.log('获取用户信息失败', err)
      })
  }
}
