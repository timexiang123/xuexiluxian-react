import React, { memo, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
  getFirstCategoriesAction,
  getSecondCategoriesAction,
  queryCoursesAction
} from '@/store/course/actionCreators'
import SearchCondition from './cpns/SearchCondition'
import SearchResult from './cpns/SearchResult'
const courseLevels = [
  {
    level: -1,
    label: '全部'
  },
  {
    level: 1,
    label: '初级'
  },
  {
    level: 2,
    label: '中级'
  },
  {
    level: 3,
    label: '高级'
  }
]
const sortByList = [
  {
    id: 1,
    sortBy: null,
    label: '综合'
  },
  {
    id: 2,
    sortBy: 'time-desc',
    label: '最新课程'
  },
  {
    id: 3,
    sortBy: 'purchase-desc',
    label: '最多购买'
  },
  {
    id: 4,
    sortBy: 'price-desc',
    label: '价格从高到低'
  },
  {
    id: 5,
    sortBy: 'price-asc',
    label: '价格从低到高'
  }
]
const Course = memo((props) => {
  const [activeFirstCategoryId, setActiveFirstCategoryId] = useState(-1)
  const [activeSecondCategoryId, setActiveSecondCategoryId] = useState(-1)
  const [activeThirdCategoryId, setActiveThirdCategoryId] = useState(-1)
  const [activeSortBy, setActiveSortBy] = useState(null)
  const [courseType, setCourseType] = useState('')
  let [pageNum, setPageNum] = useState(1)
  const [pageSize, setPageSize] = useState(12)
  useEffect(() => {
    props.getFirseCategories()
    props.getSecondCategories()
    props.queryCourses({
      pageNum,
      pageSize
    })
  }, [])
  // 改变一级分类时触发
  useEffect(() => {
    const entity = {}
    if (activeFirstCategoryId != -1) {
      entity.firstCategory = activeFirstCategoryId
    }
    props.queryCourses({
      pageNum,
      pageSize,
      entity
    })
  }, [activeFirstCategoryId])
  // 改变二级分类会触发
  useEffect(() => {
    const entity = {}
    if (activeFirstCategoryId != -1) {
      entity.firstCategory = activeFirstCategoryId
    }
    if (activeSecondCategoryId != -1) {
      entity.secondCategory = activeSecondCategoryId
    }
    props.queryCourses({
      pageNum,
      pageSize,
      entity
    })
  }, [activeSecondCategoryId])
  // 当三级分类ID改变
  useEffect(() => {
    const entity = {}
    if (activeFirstCategoryId != -1) {
      entity.firstCategory = activeFirstCategoryId
    }
    if (activeSecondCategoryId != -1) {
      entity.secondCategory = activeSecondCategoryId
    }
    if (activeThirdCategoryId != -1) {
      entity.courseLevel = activeThirdCategoryId
    }
    props.queryCourses({
      pageNum,
      pageSize,
      entity
    })
  }, [activeThirdCategoryId])
  // 当sortBy发生改变时触发
  useEffect(() => {
    const entity = {}
    if (activeFirstCategoryId != -1) {
      entity.firstCategory = activeFirstCategoryId
    }
    if (activeSecondCategoryId != -1) {
      entity.secondCategory = activeSecondCategoryId
    }
    if (activeThirdCategoryId != -1) {
      entity.courseLevel = activeThirdCategoryId
    }
    entity.sortBy = activeSortBy
    props.queryCourses({
      pageNum,
      pageSize,
      entity
    })
  }, [activeSortBy])
  // 当courseType类型发生改变时触发
  useEffect(() => {
    const entity = {}
    if (activeFirstCategoryId != -1) {
      entity.firstCategory = activeFirstCategoryId
    }
    if (activeSecondCategoryId != -1) {
      entity.secondCategory = activeSecondCategoryId
    }
    if (activeThirdCategoryId != -1) {
      entity.courseLevel = activeThirdCategoryId
    }
    if (courseType == 'free') {
      entity.isFree = 1
    } else if (courseType == 'member') {
      entity.isMember = 1
    }
    entity.sortBy = activeSortBy
    props.queryCourses({
      pageNum,
      pageSize,
      entity
    })
  }, [courseType])
  // 分页发生改变
  useEffect(() => {
    const entity = {}
    if (activeFirstCategoryId != -1) {
      entity.firstCategory = activeFirstCategoryId
    }
    if (activeSecondCategoryId != -1) {
      entity.secondCategory = activeSecondCategoryId
    }
    if (activeThirdCategoryId != -1) {
      entity.courseLevel = activeThirdCategoryId
    }
    if (courseType == 'free') {
      entity.isFree = 1
    } else if (courseType == 'member') {
      entity.isMember = 1
    }
    entity.sortBy = activeSortBy
    props.queryCourses({
      pageNum,
      pageSize,
      entity
    })
  }, [pageNum, pageSize])
  // 点击一级分类触发
  const firstCategoryClick = (id) => {
    // 修改对应的activeId
    setActiveFirstCategoryId(id)
    // 请求二级分类数据
    props.getSecondCategories(id)
    // 二级分类应该变成全部
    setActiveSecondCategoryId(-1)
    // 三级分类应该变成全部
    setActiveThirdCategoryId(-1)
    // sortBy要变成null
    setActiveSortBy(null)
    // courseType要变成空
    setCourseType('')
    // pageNum要重置为1
    setPageNum(1)
    // pageSize要重置为12
    setPageSize(12)
  }
  // 点击二级分类时触发
  const secondCategoryClick = (id) => {
    // 修改对应的activeId
    setActiveSecondCategoryId(id)
    // 三级分类应该变成全部
    setActiveThirdCategoryId(-1)
    // sortBy要变成null
    setActiveSortBy(null)
    // courseType要变成空
    setCourseType('')
    // pageNum要重置为1
    setPageNum(1)
    // pageSize要重置为12
    setPageSize(12)
  }
  // 点击三级分类时触发
  const thirdCategoryClick = (id) => {
    // 修改对应的activeId
    setActiveThirdCategoryId(id)
    // sortBy要变成null
    setActiveSortBy(null)
    // courseType要变成空
    setCourseType('')
    // pageNum要重置为1
    setPageNum(1)
    // pageSize要重置为12
    setPageSize(12)
  }
  // 修改sortBy
  const changeSortBy = (sortBy) => {
    setActiveSortBy(sortBy)
    // courseType要变成空
    setCourseType('')
    // pageNum要重置为1
    setPageNum(1)
    // pageSize要重置为12
    setPageSize(12)
  }
  // 修改课程类型（免费/会员）
  const changeCourseType = (type) => {
    setCourseType(type)
    // pageNum要重置为1
    setPageNum(1)
    // pageSize要重置为12
    setPageSize(12)
  }
  // 修改pageNum
  const changePageNum = (pageNum) => {
    setPageNum(pageNum)
  }
  // 修改pageSize
  const changePageSize = (pageSize) => {
    setPageSize(pageSize)
    setPageNum(1)
  }
  return (
    <div className="course-center">
      {/* 搜索条件 */}
      <SearchCondition
        firstCategories={props.firstCategories}
        secondCategories={props.secondCategories}
        thirdCategories={courseLevels}
        activeFirstCategoryId={activeFirstCategoryId}
        activeSecondCategoryId={activeSecondCategoryId}
        activeThirdCategoryId={activeThirdCategoryId}
        firstCategoryClick={(id) => firstCategoryClick(id)}
        secondCategoryClick={(id) => secondCategoryClick(id)}
        thirdCategoryClick={(id) => thirdCategoryClick(id)}
      ></SearchCondition>
      {/* 搜索结果 */}
      <SearchResult
        sortByList={sortByList}
        activeSortBy={activeSortBy}
        courseType={courseType}
        changeSortBy={(sortBy) => changeSortBy(sortBy)}
        changeCourseType={(courseType) => changeCourseType(courseType)}
        courseList={props.courses?.list}
        total={props.courses?.total}
        pageNum={pageNum}
        pageSize={pageSize}
        changePageNum={(pageNum) => {
          changePageNum(pageNum)
        }}
        changePageSize={(pageSize) => changePageSize(pageSize)}
      ></SearchResult>
    </div>
  )
})
const mapStateToProps = (state) => {
  return {
    firstCategories: state.course.firstCategories,
    secondCategories: state.course.secondCategories,
    courses: state.course.courses
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getFirseCategories() {
      dispatch(getFirstCategoriesAction())
    },
    getSecondCategories(id) {
      dispatch(getSecondCategoriesAction(id))
    },
    queryCourses(data) {
      dispatch(queryCoursesAction(data))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Course)
