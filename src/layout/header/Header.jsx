import React, { memo, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderWrapper } from './style'
import storage from '@/utils/storage'
import LogoPng from '../../assets/images/logo.png'
import UnLogin from './cpns/un-login'
import HasLogin from './cpns/has-login'
const Header = memo(() => {
  const [userInfo, setUserInfo] = useState({})
  useEffect(() => {
    const userInfo = JSON.parse(storage.getStorage('userInfo')) || {}
    if (userInfo.id) {
      setUserInfo(userInfo)
    }
  }, [])
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
          {/* 已登录/未登录 */}
          {userInfo.id ? <HasLogin user={userInfo}></HasLogin> : <UnLogin></UnLogin>}
        </div>
      </div>
    </HeaderWrapper>
  )
})

export default Header
