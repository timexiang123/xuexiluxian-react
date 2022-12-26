import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import { getMostNewCoursesAction } from '@/store/home/actionCreators'
import NewCourseWrapper from './style'
import SectionTitle from '@/components/section-title/SectionTitle'
import CourseCard from '@/components/course-card/CourseCard'
const App = memo((props) => {
  useEffect(() => {
    props.getMostNewCourses()
  }, [])
  return (
    <NewCourseWrapper>
      <div className="container-xl">
        {/* title */}
        <SectionTitle title={'新上好课'}></SectionTitle>
        {/* content */}
        <div className="course-content">
          <ul className="content-ul">
            {props.mostNew?.map((item) => {
              return <CourseCard item={item} key={item.id}></CourseCard>
            })}
          </ul>
        </div>
      </div>
    </NewCourseWrapper>
  )
})

const mapStateToProps = (state) => {
  return {
    mostNew: state.home.mostNew
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getMostNewCourses() {
      dispatch(getMostNewCoursesAction())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
