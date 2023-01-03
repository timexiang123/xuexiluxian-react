import React, { memo, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
  getFirstCategoriesAction,
  getSecondCategoriesAction
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
  useEffect(() => {
    props.getFirseCategories()
    props.getSecondCategories()
  }, [])
  // 点击一级分类触发
  const firstCategoryClick = (id) => {
    // 修改对应的activeId
    setActiveFirstCategoryId(id)
    // 请求二级分类数据
    props.getSecondCategories(id)
  }
  // 点击二级分类时触发
  const secondCategoryClick = (id) => {
    // 修改对应的activeId
    setActiveSecondCategoryId(id)
  }
  // 点击三级分类时触发
  const thirdCategoryClick = (id) => {
    // 修改对应的activeId
    setActiveThirdCategoryId(id)
  }
  // 修改sortBy
  const changeSortBy = (sortBy) => {
    setActiveSortBy(sortBy)
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
        changeSortBy={(sortBy) => changeSortBy(sortBy)}
      ></SearchResult>
    </div>
  )
})
const mapStateToProps = (state) => {
  return {
    firstCategories: state.course.firstCategories,
    secondCategories: state.course.secondCategories
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getFirseCategories() {
      dispatch(getFirstCategoriesAction())
    },
    getSecondCategories(id) {
      dispatch(getSecondCategoriesAction(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Course)
