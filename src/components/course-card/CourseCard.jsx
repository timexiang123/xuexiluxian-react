import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import CourseCard from './style'
import vipIcon from '@/assets/images/vipLogo.png'
const App = memo((props) => {
  useEffect(() => {
    console.log(props.item)
  }, [])
  return (
    <CourseCard className="content-li">
      <div className="li-top">
        <div className="li-img">
          <img
            src={props.item?.courseCover}
            alt={props.item?.courseName}
            title={props.item?.courseName}
          />
        </div>
        {props.item.isMember == 1 && props.item.discountPrice && (
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
          {props.item.isMember == 1 && props.item.discountPrice && (
            <div className="memberfree">会员免费</div>
          )}
          <div className="memberprice">
            ￥{props.item?.discountPrice?.toFixed(2)}
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
