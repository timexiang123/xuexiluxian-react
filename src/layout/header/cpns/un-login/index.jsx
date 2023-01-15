import React, { memo } from 'react'
import { Link } from 'react-router-dom'
const UnLogin = memo(() => {
  return (
    <div className="header-login">
      <Link to="/u/toLogin" className="head-login-a" title="登录">
        登录
      </Link>
      &nbsp;/&nbsp;
      <Link to="/u/toLogin" className="head-login-a" title="注册">
        注册
      </Link>
    </div>
  )
})

export default UnLogin
