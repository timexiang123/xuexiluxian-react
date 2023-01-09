import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { getVipListAction } from '@/store/vip/actionCreators'
import Wrapper from './style'
import VipBannerIcon from '@/assets/images/vip_banner.png'
import rightIcon from '@/assets/images/right.png'
import rightActiveIcon from '@/assets/images/right-active.png'
import TuijianIcon from '@/assets/images/tuijian.png'
const Vip = memo((props) => {
  useEffect(() => {
    props.getVipList()
  }, [])
  const termNumbers = ['天', '月', '年']
  return (
    <Wrapper>
      <div className="bg-image">
        <img src={VipBannerIcon} title="会员充值" alt="会员充值" />
      </div>
      {/* 内容部分 */}
      <div className="member-container">
        <div className="container-xl title">欢迎加入本站会员</div>
        <div className="container-xl">
          <div className="row">
            {props.vipList?.map((item) => {
              return (
                <div className="col-3" key={item.id}>
                  <div className="item-normal-experience">
                    <div className="item-title">
                      {item.vipIcon && (
                        <div className="item-title-img">
                          <img src={item.vipIcon} alt="会员套餐图标" />
                        </div>
                      )}
                      <div className="item-title-title">{item.vipName}</div>
                      {item.isRecommend == 1 && (
                        <div className="title-tuijian">
                          <img src={TuijianIcon} alt="推荐" />
                        </div>
                      )}
                    </div>
                    <div className="item-desc">{item.vipDesc}</div>
                    <div className="item-price">
                      <div className="item-price-fuhao">￥</div>
                      <div className="item-price-num">
                        {item.price?.toFixed(2)}
                      </div>
                      <div className="item-price-time">
                        元 /{' '}
                        <span>
                          {item.termNumber}
                          {termNumbers[item.termType - 1]}
                        </span>
                      </div>
                    </div>
                    <div className="item-start-box">
                      <Button type="primary">立即开通</Button>
                    </div>
                    <ul className="item-list">
                      {JSON.parse(item.interests)?.map((interest,index) => {
                        return (
                          <li key={interest.label}>
                            <div>{interest.label}</div>
                            <div className="item-list-r">
                              <img src={index==0?rightActiveIcon:rightIcon} />
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
})

const mapStateToProps = (state) => {
  return {
    vipList: state.vip.vipList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getVipList() {
      dispatch(getVipListAction())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Vip)
