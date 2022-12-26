import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { FooterWrapper } from './style'
import logo from '@/assets/images/logo02.png'
import factory from '@/assets/images/foot-factory.png'
import officalWx from '@/assets/images/offical-wx.jpg'
import teacherWx from '@/assets/images/teacher-wx.jpg'
const Footer = memo((props) => {
  const isShow = props.isShow
  return (
    isShow && (
      <FooterWrapper>
        <div className="container-xl footer-main">
          <div className="footer-xlx">
            <img src={logo} alt="小鹿线" title="小鹿线" />
          </div>
          <div className="footer-factory">
            <img src={factory} alt="小鹿线" title="小鹿线" />
          </div>
          <div className="copytight">
            <ul className="copy-top">
              <li>
                <Link to="/">关于我们</Link>
              </li>
              <li>｜</li>
              <li>
                <Link to="/">联系我们</Link>
              </li>
              <li>｜</li>
              <li>
                <Link to="/">意见反馈</Link>
              </li>
              <li>｜</li>
              <li>
                <Link to="/">版权声明</Link>
              </li>
            </ul>
            <div className="copy-bottom">
              <div style={{ textAlign: 'center', marginTop: '5px' }}>
                Copyright © 2018~2038 小鹿线 www.xuexiluxian.cn
                24小时服务热线：010-86483040
              </div>
              <div style={{ textAlign: 'center', marginTop: '5px' }}>
                <Link to="/agreement/user-service" title="小鹿线用户服务协议">
                  《小鹿线用户服务协议》
                </Link>
                <Link to="/agreement/privacy-policy" title="小鹿线隐私政策">
                  《小鹿线隐私政策》
                </Link>
                <a
                  href="https://beian.miit.gov.cn/#/Integrated/index"
                  target="_blank"
                  title="京ICP备18061704号"
                >
                  京ICP备18061704号
                </a>
              </div>
            </div>
          </div>
          <div className="wx">
            <div className="wx-bg">
              <img src={officalWx} alt="官方微信" title="官方微信" />
            </div>
            <div className="wx-dsc">官方微信</div>
          </div>
          <div className="wx">
            <div className="wx-bg">
              <img src={teacherWx} alt="指导老师微信" title="指导老师微信" />
            </div>
            <div className="wx-dsc">指导老师微信</div>
          </div>
        </div>
      </FooterWrapper>
    )
  )
})

export default Footer
