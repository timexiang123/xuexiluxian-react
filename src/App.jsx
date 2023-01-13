import React, { memo, useState, useEffect } from 'react'
import Layout from '@/layout/Layout'
import { useLocation } from 'react-router-dom'
const App = memo(() => {
  let [isShow, setIsShow] = useState(true)
  const location = useLocation()
  useEffect(() => {
    if (location.pathname === '/u/toLogin') {
      setIsShow(false)
    } else {
      setIsShow(true)
    }
  })
  return <Layout isShow={isShow}></Layout>
})
export default App
