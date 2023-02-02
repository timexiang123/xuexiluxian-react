import React, { memo } from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
const Wrapper = memo(() => {
  const [searchParams] = useSearchParams()
  let [courseId, setCourseId] = useState('')
  let [chapterId, setChapterId] = useState('')
  useEffect(() => {
    if (searchParams.get('courseId')) {
      setCourseId(searchParams.get('courseId'))
    }
    if (searchParams.get('chapterId')) {
      setChapterId(searchParams.get('chapterId'))
    }
  }, [])
  console.log(courseId, chapterId)
  return <div>课程播放页</div>
})

export default Wrapper
