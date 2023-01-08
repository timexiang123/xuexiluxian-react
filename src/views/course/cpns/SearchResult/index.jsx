import React, { Fragment, memo } from 'react'
import { Radio, Pagination } from 'antd'
import Wrapper from './style'
import CourseCard from '@/components/course-card/CourseCard'
import CourseEmpty from '@/components/course-empty'
import classNames from 'classnames'
const index = memo((props) => {
  // sortBy改变
  const changeSortBy = (sortBy) => {
    if (props.activeSortBy !== sortBy) {
      props.changeSortBy && props.changeSortBy(sortBy)
    }
  }
  // 课程类型改变
  const onCourseTypeChange = (e) => {
    const value = e.target.value
    props.changeCourseType && props.changeCourseType(value)
  }
  // 分页器发生改变
  const onPaginationChange = (pageNum, pageSize) => {
    props.changePageNum && props.changePageNum(pageNum)
  }
  // pageSize发生改变
  const onPageSizeChange = (current, size) => {
    props.changePageSize && props.changePageSize(size)
  }
  return (
    <Wrapper>
      <div className="container-xl">
        {/* 课程展示 */}
        <div className="course-top">
          <ul className="sortby">
            {props.sortByList?.map((item) => {
              return (
                <Fragment key={item.id}>
                  <li
                    className={classNames({
                      item: true,
                      active: props.activeSortBy === item.sortBy
                    })}
                    title={item.label}
                    onClick={() => changeSortBy(item.sortBy)}
                  >
                    {item.label}
                  </li>
                  <li className="split">|</li>
                </Fragment>
              )
            })}
          </ul>
          <div className="right">
            <Radio.Group onChange={onCourseTypeChange} value={props.courseType}>
              <Radio value={'free'}>免费课程</Radio>
              <Radio value={'member'}>会员课程</Radio>
            </Radio.Group>
          </div>
        </div>
      </div>
      <div className="container-xl xl-main">
        <div className="course-content">
          {props.courseList?.length ? (
            <ul className="content-ul">
              {props.courseList?.map((item) => {
                return <CourseCard item={item} key={item.id}></CourseCard>
              })}
            </ul>
          ) : (
            <CourseEmpty></CourseEmpty>
          )}
        </div>
      </div>
      {props.courseList?.length && (
        <div className="container-xl">
          <div className="xl-pager">
            <Pagination
              total={props.total}
              current={props.pageNum}
              pageSize={props.pageSize}
              pageSizeOptions={['8', '12', '16', '24']}
              showSizeChanger
              showQuickJumper
              showTotal={(total) => `Total ${total} 门课程`}
              onChange={onPaginationChange}
              onShowSizeChange={onPageSizeChange}
            />
          </div>
        </div>
      )}
    </Wrapper>
  )
})

export default index
