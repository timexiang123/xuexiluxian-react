import React, { memo, useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Loading from '@/components/loading'
import {
  loginByPwdAction,
  loginByCaptchaAction,
  getUserInfoAction
} from '@/store/user/actionCreators'
import { errorNotifiy, successNotifiy } from '@/utils/utils'
import { sendCaptcha } from '@/service/modules/user'
import { Encrypt } from '@/utils/serect'
import Wrapper from './login-style'
import loginbg from '@/assets/images/loginbg.jpg'
import logo from '@/assets/images/logo02.png'
import code from '@/assets/images/code.png'
import wx from '@/assets/images/wx.png'
import qq from '@/assets/images/qq.png'
import wb from '@/assets/images/weibo.png'
import accountIcon from '@/assets/images/account.png'
import lockIcon from '@/assets/images/lock.png'
import phoneIcon from '@/assets/images/phone.png'
import ybbgIcon from '@/assets/images/login-ybbg.jpg'
import classNames from 'classnames'
const Login = memo((props) => {
  const [loginType, setLoginType] = useState('captchaLogin')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [mobile, setMobile] = useState('')
  const [captcha, setCaptcha] = useState('')
  const [canSendCaptcha, setCanSendCaptcha] = useState(true)
  const [restTime, setRestTime] = useState(10)
  const [loginLoading, setLoginLoading] = useState(false)
  const restTimeRef = useRef()
  let timer = null
  // 当token改变时触发
  useEffect(() => {
    if (props.token) {
      props.getUserInfo && props.getUserInfo(props.token)
      setLoginLoading(false)
    }
  }, [props.token])
  // 当restTime发生改变时触发
  useEffect(() => {
    restTimeRef.current = restTime
  }, [restTime])
  // 切换登录类型
  const switchLoginType = (type) => {
    if (type === loginType) return
    setLoginType(type)
  }
  // 验证手机号规则
  const mobileReg = () => {
    const reg = /^1[35789]\d{9}$/
    return reg.test(mobile)
  }
  // username输入框内容发生改变时触发
  const usernameInputChange = (e) => {
    setUserName(e.target.value)
  }
  // password输入框内容发生改变
  const passwordChange = (e) => {
    setPassword(e.target.value)
  }
  // 点击账号密码登录按钮
  const pwdLoginBtnClick = async () => {
    // 1.判断用户名和密码是不是填写
    if (username === '') {
      return errorNotifiy('用户名不能为空')
    }
    if (password === '') {
      return errorNotifiy('密码不能为空')
    }
    // 2.向后端发送登录请求
    setLoginLoading(true)
    props.loginByPwd &&
      props.loginByPwd(Encrypt(username), Encrypt(password), () => {
        setLoginLoading(false)
      })
  }
  // 监听手机号发生改变
  const onMobileChange = (e) => {
    if (e.target.value.length <= 11) {
      setMobile(e.target.value)
    }
  }
  // 监听验证码发生改变
  const onCaptchaChange = (e) => {
    if (e.target.value.length <= 6) {
      setCaptcha(e.target.value)
    }
  }
  // 点击发送验证码按钮
  const sendCaptchaClick = () => {
    // 1.先校验手机号是否合法
    if (!mobileReg()) {
      return errorNotifiy('请填写11位合法手机号')
    }
    // 2.开始倒计时
    setCanSendCaptcha(false)
    timer = setInterval(() => {
      setRestTime((val) => val - 1)
      if (restTimeRef.current <= 1) {
        setRestTime(10)
        clearInterval(timer)
        timer = null
        setCanSendCaptcha(true)
      }
    }, 1000)
    // 3.向后端发送验证码
    sendCaptcha(mobile)
      .then((res) => {
        res && successNotifiy('短信发送成功，请留意手机')
      })
      .catch((err) => {
        errorNotifiy('发送短信验证码失败')
        console.log('发送短信验证码失败', err)
      })
  }
  // 点击短信验证码登录
  const captchaLoginBtnClick = () => {
    // 1.先校验手机号是否合法
    if (!mobileReg()) {
      return errorNotifiy('请填写11位合法手机号')
    }
    // 2.判断验证码是否填写
    if (captcha === '') {
      return errorNotifiy('请填写验证码')
    }
    // 3.向后端发起登录请求
    setLoginLoading(true)
    props.loginByCaptcha &&
      props.loginByCaptcha(Encrypt(mobile), captcha, () => {
        setLoginLoading(false)
      })
  }
  return (
    <Wrapper loginbg={loginbg} rightBg={ybbgIcon}>
      {loginLoading && <Loading title="登录"></Loading>}
      <section>
        <div className="login-box">
          {/* 登录框左侧 */}
          <div className="login-left">
            <a href="/" title="小鹿线" className="logo">
              <img src={logo} alt="小鹿线" title="小鹿线" />
            </a>
            <div className="left-qrcode">
              <div id="qrcode" title="小鹿线">
                <img src={code} alt="二维码" />
              </div>
              <div className="qrcode-text">扫码登录</div>
            </div>
            <div className="quick-login">快捷登录</div>
            <div className="qq-wx-wb">
              <div className="wx-login">
                <a
                  href="https://open.weixin.qq.com/connect/qrconnect?response_type=code&appid=wx49a4993d58eeeff8&redirect_uri=https://www.xuexiluxian.cn/oauth/WECHAT_OPEN/callback&scope=snsapi_login&state=df2562ec68e49f873d08bd468974f029"
                  title="微信登录"
                  target={'_blank'}
                >
                  <img src={wx} alt="微信登录" />
                </a>
              </div>
              <div className="qq-login">
                <a
                  href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=101981229&redirect_uri=https://www.xuexiluxian.cn/oauth/QQ/callback&state=39958d9a2b9e4bdbb605cf76bda9a08d&scope=get_user_info"
                  title="QQ登录"
                  target={'_blank'}
                >
                  <img src={qq} alt="QQ登录" />
                </a>
              </div>
              <div className="weibo-login">
                <a
                  href="https://api.weibo.com/oauth2/authorize?response_type=code&client_id=4232965955&redirect_uri=https://www.xuexiluxian.cn/oauth/weibo/callback&state=e26d178b4666a73b23e3b049df552949&scope=all###"
                  title="微博登录"
                  target={'_blank'}
                >
                  <img src={wb} alt="微博登录" />
                </a>
              </div>
            </div>
          </div>
          {/* 登录框右侧 */}
          <div className="login-right">
            <div className="login-form">
              <ul className="nav nav-tabs">
                <li
                  className={classNames('nav-items', {
                    active: loginType === 'pwdLogin',
                    actives: loginType === 'pwdLogin'
                  })}
                  onClick={() => switchLoginType('pwdLogin')}
                >
                  <span
                    className={classNames('nav-links', {
                      active: loginType === 'pwdLogin',
                      activess: loginType === 'pwdLogin'
                    })}
                  >
                    账号登录
                  </span>
                </li>
                <li
                  className={classNames('nav-items', {
                    active: loginType === 'captchaLogin',
                    actives: loginType === 'captchaLogin'
                  })}
                  onClick={() => switchLoginType('captchaLogin')}
                >
                  <span
                    className={classNames('nav-links', {
                      active: loginType === 'captchaLogin',
                      activess: loginType === 'captchaLogin'
                    })}
                  >
                    短信登录
                  </span>
                </li>
              </ul>
              <div className="tab-content">
                {/* 账号密码登录 */}
                <div
                  className={classNames('tab-pane', 'fade', {
                    active: loginType === 'pwdLogin',
                    show: loginType === 'pwdLogin'
                  })}
                >
                  <div className="tab-main">
                    <div className="pwd-login">
                      <div className="login-user">
                        <img src={accountIcon} alt="用户名" />
                        <input
                          type="text"
                          placeholder="请输入用户名"
                          value={username}
                          onChange={usernameInputChange}
                        />
                      </div>
                      <div className="login-password">
                        <img src={lockIcon} alt="密码" />
                        <input
                          type="password"
                          placeholder="请输入密码"
                          value={password}
                          onChange={passwordChange}
                        />
                      </div>
                      <div className="login-submit">
                        <button
                          className="btn btn-primary"
                          onClick={() => pwdLoginBtnClick()}
                        >
                          立即登录
                        </button>
                      </div>
                      <div className="login-text">
                        登录即同意
                        <Link
                          to="/agreement/user-service"
                          title="小鹿线用户服务协议"
                        >
                          《小鹿线用户服务协议》
                        </Link>
                        <Link
                          to="/agreement/privacy-policy"
                          title="小鹿线小鹿线隐私政策"
                        >
                          《小鹿线隐私政策》
                        </Link>
                      </div>
                    </div>
                    <div className="go-register">
                      <Link to="/" title="小鹿线">
                        返回首页
                      </Link>
                    </div>
                  </div>
                </div>
                {/* 手机验证码登录 */}
                <div
                  className={classNames('tab-pane', 'fade', {
                    active: loginType === 'captchaLogin',
                    show: loginType === 'captchaLogin'
                  })}
                >
                  <div className="tab-main">
                    <div className="captcha-login">
                      <div className="login-user">
                        <img src={phoneIcon} alt="手机验证码登录" />
                        <input
                          type="number"
                          placeholder="请输入11位合法手机号"
                          max={11}
                          value={mobile}
                          onChange={onMobileChange}
                        />
                      </div>
                      <div className="login-Verification">
                        <input
                          type="number"
                          placeholder="请输入验证码"
                          value={captcha}
                          onChange={onCaptchaChange}
                          max={6}
                        />
                        {canSendCaptcha ? (
                          <button
                            className="btn btn-primary"
                            onClick={sendCaptchaClick}
                          >
                            发送验证码
                          </button>
                        ) : (
                          <button className="btn  disabled">
                            <span className="rest-time"> {restTime}</span>
                            秒后可重发
                          </button>
                        )}
                      </div>
                      <div className="login-submit">
                        <button
                          className="btn btn-primary"
                          onClick={() => captchaLoginBtnClick()}
                        >
                          立即登录
                        </button>
                      </div>
                      <div className="login-text">
                        登录即同意
                        <Link
                          to="/agreement/user-service"
                          title="小鹿线用户服务协议"
                        >
                          《小鹿线用户服务协议》
                        </Link>
                        <Link
                          to="/agreement/privacy-policy"
                          title="小鹿线小鹿线隐私政策"
                        >
                          《小鹿线隐私政策》
                        </Link>
                      </div>
                    </div>
                    <div className="go-register">
                      <Link to="/" title="小鹿线">
                        返回首页
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  )
})
const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    userInfo: state.user.userInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginByPwd(username, password, cb) {
      dispatch(loginByPwdAction(username, password, cb))
    },
    loginByCaptcha(mobile, captcha, cb) {
      dispatch(loginByCaptchaAction(mobile, captcha, cb))
    },
    getUserInfo(token) {
      dispatch(getUserInfoAction(token))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
