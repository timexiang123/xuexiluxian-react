import React, { memo } from 'react'
import { Spin } from 'antd'
import Wrapper from './style'
const Loading = memo((props) => {
  const { title = '加载' } = props
  return (
    <Wrapper>
      <Spin size="large" />
      <span>正在{title}中...</span>
    </Wrapper>
  )
})

export default Loading
