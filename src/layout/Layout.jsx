import React, { memo } from 'react'
import AppHeader from './header/Header'
import AppContent from './content/Content'
import AppFooter from './footer/Footer'
import { AppWrapper } from './style'
const Layout = memo(() => {
  return (
    <AppWrapper className="app-container">
      <div className="app-header">
        <AppHeader isShow></AppHeader>
      </div>
      <div className="app-content">
        <AppContent></AppContent>
      </div>
      <div className="app-footer">
        <AppFooter isShow></AppFooter>
      </div>
    </AppWrapper>
  )
})

export default Layout
