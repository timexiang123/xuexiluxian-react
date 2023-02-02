import PropTypes from 'prop-types'
import React, { memo } from 'react'
import CourseCard from './style'
import vipIcon from '@/assets/images/vipLogo.png'
import { useNavigate } from 'react-router-dom'
const App = memo((props) => {
  const isVip = props.item.isMember == 1 && props.item.discountPrice > 0
  const navigate = useNavigate()
  // 跳转到课程详情页
  const toCourseDetail = (id) => {
    if (id) {
      navigate('/course/detail/' + id)
    }
  }
  return (
    <CourseCard
      className="content-li"
      onClick={() => toCourseDetail(props?.item?.id)}
    >
      <div className="li-top">
        <div className="li-img">
          <img
            src={props.item?.courseCover}
            alt={props.item?.courseName}
            title={props.item?.courseName}
          />
        </div>
        {isVip && (
          <div className="vip-icon">
            <img src={vipIcon} alt="" />
          </div>
        )}
      </div>
      <div className="li-bottom">
        <div className="li-name nowrap" title={props.item?.courseName}>
          {props.item?.courseName}
        </div>
        <div className="li-desc">
          <span className="level">初级</span>
          <span className="dot">·</span>
          <span className="count">
            {props.item?.purchaseCnt + props.item?.purchaseCounter || 0}人报名
          </span>
        </div>
        <div className="li-sale-price">
          {props.item.isMember == 1 && props.item.discountPrice > 0 && (
            <div className="memberfree">会员免费</div>
          )}
          <div className="memberprice">
            {props.item?.discountPrice == 0 && props.item.isMember == 0 && (
              <span className="free-learn">免费学习</span>
            )}
            {props.item?.discountPrice > 0 && (
              <span className="not-free-learn">
                ￥{props.item?.discountPrice?.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </CourseCard>
  )
})

App.propTypes = {
  item: PropTypes.object
}
App.defaultProps = {
  item: {}
}
export default App
