import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import {
  getHomeBannersAction,
  getActiveBannerAction,
  getFirstCategoriesAction
} from '@/store/home/actionCreators'
import Swiper from '@/components/swiper/swiper'
import { NavWrapper } from './style'
import { CaretRightOutlined } from '@ant-design/icons'
import chuji from 'assets/images/chuji.png'
import zhongji from 'assets/images/zhongji.png'
import gaoji from 'assets/images/gaoji.png'
import xiangmu from 'assets/images/xiangmu.png'
import suanfa from 'assets/images/suanfa.png'
const NavBanner = memo((props) => {
  useEffect(() => {
    props.getFirstCategories()
    props.getHomeBanners()
  }, [])
  const onSwiperChange = (current) => {
    props.getActiveBanner(
      props?.banners[current]?.imageUrl ||
        'https://oss.xuexiluxian.cn/xiaoluxian-vcr/8c6ee4cf7fb54425987871b9a2f52f2e.png'
    )
  }
  return (
    <NavWrapper>
      <div className="container-xl">
        <div className="nav-banner">
          <div className="banner-top">
            <ul className="banner-left">
              {props.firstCategories?.map((item) => {
                return (
                  <li key={item.id}>
                    <div className="first-category">
                      <span className="label">{item.categoryName}</span>
                      <span className="right-arrow">
                        <CaretRightOutlined style={{ color: '#fff' }} />
                      </span>
                    </div>
                  </li>
                )
              })}
            </ul>
            <div className="banner-right">
              <Swiper
                list={props.banners}
                width="860px"
                height="400px"
                onSwiperChange={onSwiperChange}
              ></Swiper>
            </div>
          </div>
          <div className="banner-bottom">
            <div className="bottom-type">
              <div className="type-left">
                <img src={chuji} alt="初级课程" title="初级课程" />
              </div>
              <div className="type-right">
                <div className="right-title">初级课程</div>
                <div className="right-desc">入门课、岗位多</div>
              </div>
            </div>
            <div className="bottom-type">
              <div className="type-left">
                <img src={zhongji} alt="中级课程" title="中级课程" />
              </div>
              <div className="type-right">
                <div className="right-title">中级课程</div>
                <div className="right-desc">进阶和实战</div>
              </div>
            </div>
            <div className="bottom-type">
              <div className="type-left">
                <img src={gaoji} alt="高级课程" title="高级课程" />
              </div>
              <div className="type-right">
                <div className="right-title">高级课程</div>
                <div className="right-desc">轻松掌握核心技能</div>
              </div>
            </div>
            <div className="bottom-type">
              <div className="type-left">
                <img src={xiangmu} alt="项目实战" title="项目实战" />
              </div>
              <div className="type-right">
                <div className="right-title">项目实战</div>
                <div className="right-desc">手把手实战</div>
              </div>
            </div>
            <div className="bottom-type">
              <div className="type-left">
                <img src={suanfa} alt="前端算法" title="前端算法" />
              </div>
              <div className="type-right">
                <div className="right-title">前端算法</div>
                <div className="right-desc">笑傲前端技能</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavWrapper>
  )
})
const mapStateToProps = (state) => {
  return {
    banners: state.home.banners,
    firstCategories: state.home.firstCategories
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getFirstCategories() {
      dispatch(getFirstCategoriesAction())
    },
    getHomeBanners() {
      dispatch(getHomeBannersAction())
    },
    getActiveBanner(banner) {
      dispatch(getActiveBannerAction(banner))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBanner)
