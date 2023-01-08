import React, { memo } from 'react'
import emptyIcon from '@/assets/images/empty.png'
const CourseEmpty = memo(() => {
  return (
    <div className="course-empty">
      <img src={emptyIcon} alt="课程为空" />
      <span>暂无课程资料</span>
    </div>
  )
})

export default CourseEmpty
