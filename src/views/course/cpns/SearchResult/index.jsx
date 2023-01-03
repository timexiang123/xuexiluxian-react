import React, { Fragment, memo, useState } from 'react'
import { Radio } from 'antd'
import Wrapper from './style'
import classNames from 'classnames'
const index = memo((props) => {
  const [courseType, setCourseType] = useState()
  // sortBy改变
  const changeSortBy = (sortBy) => {
    if (props.activeSortBy !== sortBy) {
      props.changeSortBy && props.changeSortBy(sortBy)
    }
  }
  // 课程类型改变
  const onCourseTypeChange = (e) => {
    console.log(courseType)
    setCourseType(e.target.value)
    console.log(courseType)
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
            <Radio.Group onChange={onCourseTypeChange} value={courseType}>
              <Radio value={{ isFree: 1 }} defaultChecked={false}>
                免费课程
              </Radio>
              <Radio value={{ isMember: 1 }} defaultChecked={false}>
                会员课程
              </Radio>
            </Radio.Group>
          </div>
        </div>
      </div>
      <div className="container-xl xl-main">123</div>
      <div className="container-xl">123</div>
    </Wrapper>
  )
})

export default index
