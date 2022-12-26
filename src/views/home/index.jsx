import React, { memo } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './cpns/Banner'
import NavBanner from './cpns/NavBanner'
import NewCourse from './cpns/NewCourse'
import HeatCourse from './cpns/MostHeat'
const Home = memo(() => {
  return (
    <HomeWrapper>
      <div className="container-firud">
        {/* banner */}
        <HomeBanner></HomeBanner>
        {/* nav-banner */}
        <NavBanner></NavBanner>
        {/* 新上好课 */}
        <NewCourse></NewCourse>
        {/* 推荐好课 */}
        <HeatCourse></HeatCourse>
      </div>
    </HomeWrapper>
  )
})

export default Home
