import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import { getPrivacyPolicyAction } from '@/store/agreement/actionCreators'
import Wrapper from './style'
import { formateDateTime } from '@/utils/utils'
const App = memo((props) => {
  useEffect(() => {
    props.getPrivacyPolicy()
  }, [])
  return (
    <Wrapper className="container-xl">
      <h1 className="private-h1">{props.privacyPolicy?.title}</h1>
      <div className="private-date">
        更新日期：
        <span>{formateDateTime(props.privacyPolicy?.updateTime)}</span>
      </div>
      <div
        className="private-content"
        dangerouslySetInnerHTML={{ __html: props.privacyPolicy?.content || '' }}
      ></div>
    </Wrapper>
  )
})
const mapStateToProps = (state) => {
  return {
    privacyPolicy: state.agreement.privacyPolicy
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getPrivacyPolicy() {
      dispatch(getPrivacyPolicyAction())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
