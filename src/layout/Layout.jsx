import React, { memo } from 'react'
import AppHeader from './header/Header'
import AppContent from './content/Content'
import AppFooter from './footer/Footer'
import { AppWrapper } from './style'
const Layout = memo((props) => {
  const { isShow } = props
  return (
    <AppWrapper className="app-container">
      <div className="app-header">{isShow && <AppHeader></AppHeader>}</div>
      <div className="app-content">
        <AppContent></AppContent>
      </div>
      <div className="app-footer">{isShow && <AppFooter></AppFooter>}</div>
    </AppWrapper>
  )
})

export default Layout
