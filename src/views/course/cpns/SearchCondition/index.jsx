import React, { memo } from 'react'
import Wrapper from './style'
import classNames from 'classnames'
const SearchCondition = memo((props) => {
  const {
    activeFirstCategoryId,
    activeSecondCategoryId,
    activeThirdCategoryId
  } = props
  // 第一分类点击
  const firstCategoryClick = (id) => {
    if (activeFirstCategoryId !== id) {
      props.firstCategoryClick && props.firstCategoryClick(id)
    }
  }
  // 第二分类点击
  const secondCategoryClick = (id) => {
    if (activeSecondCategoryId !== id) {
      props.secondCategoryClick && props.secondCategoryClick(id)
    }
  }
  // 第三分类点击
  const thirdCategoryClick = (id) => {
    if (activeThirdCategoryId !== id) {
      props.thirdCategoryClick && props.thirdCategoryClick(id)
    }
  }
  return (
    <Wrapper>
      <div className="container-xl">
        {/* 课程类别 */}
        <div className="classify">
          <div className="cation-middle">
            <dl className="cation-list">
              <dt>课程方向</dt>
              <dd className="course-where">
                {props?.firstCategories?.map((item) => {
                  return (
                    <span
                      className={classNames({
                        active: activeFirstCategoryId === item.id
                      })}
                      key={item.id}
                      title={item.categoryName}
                      onClick={() => firstCategoryClick(item.id)}
                    >
                      {item.categoryName}
                    </span>
                  )
                })}
              </dd>
            </dl>
            <dl className="cation-list">
              <dt>课程分类</dt>
              <dd className="course-where">
                {props?.secondCategories?.map((item) => {
                  return (
                    <span
                      className={classNames({
                        active: activeSecondCategoryId === item.id
                      })}
                      key={item.id}
                      title={item.categoryName}
                      onClick={() => secondCategoryClick(item.id)}
                    >
                      {item.categoryName}
                    </span>
                  )
                })}
              </dd>
            </dl>
            <dl className="cation-list">
              <dt>课程难度</dt>
              <dd className="course-where">
                {props?.thirdCategories?.map((item) => {
                  return (
                    <span
                      className={classNames({
                        active: activeThirdCategoryId === item.level
                      })}
                      key={item.level}
                      title={item.label}
                      onClick={() => thirdCategoryClick(item.level)}
                    >
                      {item.label}
                    </span>
                  )
                })}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </Wrapper>
  )
})

export default SearchCondition
