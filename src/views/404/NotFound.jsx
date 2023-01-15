import React, { memo, useState, useEffect } from 'react'
import { Button } from 'antd'
import { history } from '@/utils/history'
import Wrapper from './style'
const NotFound = memo(() => {
  const [height, setHeight] = useState(0)
  useEffect(() => {
    const fn = () => {
      setHeight(window.innerHeight - 250)
    }
    fn()
    window.addEventListener('resize', fn)
    return () => {
      window.removeEventListener('resize', fn)
    }
  }, [])
  // 返回首页
  const backToHome = () => {
    history.replace('/')
  }
  return (
    <Wrapper height={height}>
      <h2>页面找不到了</h2>
      <Button type="primary" size="large" onClick={backToHome}>
        返回首页
      </Button>
    </Wrapper>
  )
})

export default NotFound
