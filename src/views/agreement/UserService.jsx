import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserServiceAction } from '@/store/agreement/actionCreators'
import Wrapper from './style'
import { formateDateTime } from '@/utils/utils'
const App = memo((props) => {
  useEffect(() => {
    props.getUserService()
  }, [])
  return (
    <Wrapper className="container-xl">
      <h1 className="private-h1">{props.userService?.title}</h1>
      <div className="private-date">
        更新日期：<span>{formateDateTime(props.userService?.updateTime)}</span>
      </div>
      <div
        className="private-content"
        dangerouslySetInnerHTML={{ __html: props.userService?.content || '' }}
      ></div>
    </Wrapper>
  )
})
const mapStateToProps = (state) => {
  return {
    userService: state.agreement.userService
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getUserService() {
      dispatch(getUserServiceAction())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
