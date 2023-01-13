import React, { memo } from 'react'
import { Spin } from 'antd'
import Wrapper from './style'
const Loading = memo((props) => {
  return (
    <Wrapper>
      <Spin size="large" />
      <span>正在{props.title}...</span>
    </Wrapper>
  )
})

export default Loading
