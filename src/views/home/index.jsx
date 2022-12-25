import React, { memo } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './cpns/Banner'
import NavBanner from './cpns/NavBanner'
const Home = memo(() => {
  return (
    <HomeWrapper>
      <div className="container-firud">
        {/* banner */}
        <HomeBanner></HomeBanner>
        {/* nav-banner */}
        <NavBanner></NavBanner>
      </div>
    </HomeWrapper>
  )
})

export default Home
