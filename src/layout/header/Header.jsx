import React, { memo } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { HeaderWrapper } from './style'
import LogoPng from '../../assets/images/logo.png'
const Header = memo(() => {
  return (
    <HeaderWrapper>
      <div className="container-xl header-row">
        <div className="header-left">
          <div className="header-logo">
            <a href="/" title="首页">
              <img src={LogoPng} alt="小鹿线" title="小鹿线" />
            </a>
          </div>
          <div className="header-nav">
            <NavLink to="/home" exact="true" strict="true">
              首页
            </NavLink>
            <NavLink to="/course" exact="true" strict="true">
              课程
            </NavLink>
            <NavLink to="/vip" exact="true" strict="true">
              会员
            </NavLink>
          </div>
        </div>
        <div className="header-right">
          <div className="header-search">
            <div id="searchForm">
              <input
                type="text"
                placeholder="请输入要搜索的课程"
                id="keywords"
              />
              <div className="search-div">
                <i className="iconfont icon-search"></i>
              </div>
            </div>
          </div>
          <div className="header-login">
            <Link to="/u/toLogin" className="head-login-a" title="登录">
              登录
            </Link>
            &nbsp;/&nbsp;
            <Link to="/u/toLogin" className="head-login-a" title="注册">
              注册
            </Link>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  )
})

export default Header
