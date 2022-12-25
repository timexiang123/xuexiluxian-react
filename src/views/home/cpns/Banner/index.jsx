import React, { memo } from 'react'
import { connect } from 'react-redux'
import { HomeBanner } from './style'
const Banner = memo((props) => {
  return (
    <HomeBanner>
      <div
        className="banner-bg"
        style={{
          backgroundImage: `url(${
            props.banner ||
            'https://oss.xuexiluxian.cn/xiaoluxian-vcr/8c6ee4cf7fb54425987871b9a2f52f2e.png'
          })`
        }}
      ></div>
    </HomeBanner>
  )
})
const mapStateToProps = (state) => {
  return {
    banner: state.home.banner
  }
}
export default connect(mapStateToProps)(Banner)
