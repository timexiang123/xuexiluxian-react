import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import { getMostHeatCoursesAction } from '@/store/home/actionCreators'
import MostHeatWrapper from './style'
import SectionTitle from '@/components/section-title/SectionTitle'
import CourseCard from '@/components/course-card/CourseCard'
import MostHeatBanner from '@/assets/images/mostheat.png'
const App = memo((props) => {
  useEffect(() => {
    props.getMostHeatCourses()
  }, [])
  return (
    <MostHeatWrapper>
      <div className="container-xl">
        {/* title */}
        <SectionTitle title={'推荐好课'}></SectionTitle>
        {/* content */}
        <div className="course-content">
          <div className="content-left">
            <img src={MostHeatBanner} alt="推荐好课" title="推荐好课" />
          </div>
          <ul className="content-ul">
            {props.mostHeat?.map((item) => {
              return <CourseCard item={item} key={item.id}></CourseCard>
            })}
          </ul>
        </div>
      </div>
    </MostHeatWrapper>
  )
})

const mapStateToProps = (state) => {
  return {
    mostHeat: state.home.mostHeat
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getMostHeatCourses() {
      dispatch(getMostHeatCoursesAction())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
