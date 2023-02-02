import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import {
  confirmDialog,
  errorNotifiy,
  successNotifiy,
  covertTimeToDays
} from '@/utils/utils'
import storage from '@/utils/storage'
import { logout } from '@/service/modules/user'
import Wrapper from './style'
import defaultAvatarIcon from '@/assets/images/avatar.png'
const HasLogin = memo((props) => {
  const { user } = props
  const [showBox, setShowBox] = useState(false)
  // 点击退出登录按钮
  const clickLogoutBtn = () => {
    console.log('退出登录')
    confirmDialog(
      '退出登录',
      '您确定要退出登录吗？',
      () => {
        //  向后端发起登录请求
        logout()
          .then((res) => {
            if (res) {
              storage.removeStorage('token')
              storage.removeStorage('userInfo')
              successNotifiy('恭喜您，退出成功')
              setTimeout(() => {
                window.location.reload()
              }, 1000)
            } else {
              errorNotifiy('退出登录失败')
            }
          })
          .catch((err) => {
            console.log('退出登录失败', err)
          })
      },
      () => {
        errorNotifiy('取消了操作')
      }
    )
  }
  return (
    <Wrapper className="header-login">
      <div
        className="dropdown member-center"
        onMouseLeave={() => setShowBox(false)}
      >
        <div className="head-my-cart">
          <Link to="/shopcar/index">
            <i className="iconfont icon-gouwuche"></i>
          </Link>
        </div>
        <div className="head-my-course">
          <Link to="/course/myCourses">我的课程</Link>
        </div>
        <div className="avatar" onMouseEnter={() => setShowBox(true)}>
          <Avatar size={60} icon={<UserOutlined />} src={user.avatar} />
        </div>
        {/* 个人信息卡片 */}
        <div
          className="dropdown-menu member-center-dropdown avatar-card"
          style={{ display: showBox ? 'block' : 'none' }}
        >
          <div className="card-info">
            <div className="info-left-avatar">
              <img
                src={user.avatar || defaultAvatarIcon}
                className="avatar-login"
                title="用户头像"
                alt="用户头像"
              />
            </div>
            <div className="info-right-info">
              <div className="info-username">
                {user.nickName || user.realName || user.username || '不留名'}
              </div>
              <div className="info-member">
                {user.vipInfo?.vipIcon && (
                  <img src={user.vipInfo.vipIcon} alt="会员信息" />
                )}
                {user.vipInfo?.vipName && (
                  <span className="info-member-gr">{user.vipInfo.vipName}</span>
                )}
                {user.vipInfo?.startTime && (
                  <span className="info-member-re">
                    {covertTimeToDays(
                      user.vipInfo.endTime - Date.now()
                    )}
                    天到期
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="card-type">
            <Link
              className="type-item"
              to="/profile/myCourses"
              title="我的课程"
            >
              <i className="iconfont icon-kecheng1"></i>
              <span>我的课程</span>
            </Link>
            <Link className="type-item" to="/profile/myOrders" title="订单中心">
              <i className="iconfont icon-dingdan"></i>
              <span>订单中心</span>
            </Link>
            <Link
              className="type-item"
              to="/profile/myMessages"
              title="我的消息"
            >
              <i className="iconfont icon-xiaoxi"></i>
              <span>我的消息</span>
            </Link>
            <Link
              className="type-item"
              to="/profile/myCourses"
              title="我的收藏"
            >
              <i className="iconfont icon-shezhi"></i>
              <span>我的收藏</span>
            </Link>
          </div>
          <div className="card-loginout">
            <span title="退出登录" onClick={clickLogoutBtn}>
              退出登录
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  )
})

export default HasLogin
