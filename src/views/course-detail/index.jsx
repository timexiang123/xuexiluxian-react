import React, { memo, useEffect, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import Wrapper from './style'
import { Link, useParams } from 'react-router-dom'
import { history } from '@/utils/history'
import { RightOutlined } from '@ant-design/icons'
import { getCourseDetailAction } from '@/store/course/actionCreators'
import AvatIcon from '@/assets/images/Avat.png'
import teacherStart from '@/assets/images/teacherStart.png'
import videoIcon from '@/assets/images/video.png'
import downLoad from '@/assets/images/download.png'
import emptyCourse from '@/assets/images/empty-resource.png'
import classNames from 'classnames'
import storage from '@/utils/storage'
import { errorNotifiy } from '@/utils/utils'
import { checkCourseAuth, downloadAttachment } from '@/service/modules/course'
const Coursedetail = memo(() => {
  const [navType, setNavType] = useState('chapter')
  const params = useParams()
  const id = params.courseId || ''
  const dispatch = useDispatch()
  const { detail } = useSelector(
    (state) => ({
      detail: state.course.detail
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(getCourseDetailAction(id))
    return () => {
      detail.bizCourseChapters = []
      detail.bizCourseAttachments = []
    }
  }, [])
  // 切换nav
  const switchNavType = (type) => {
    setNavType(type)
  }
  // 课程类型：免费课，会员课、付费课
  const courseType = () => {
    let type = ''
    if (detail.discountPrice == 0) {
      type = '免费课'
    } else if (detail.isMember == 1) {
      type = '会员课'
    } else {
      type = '付费课'
    }
    return type
  }
  // 课程级别：1.初级；2、中级；3、高级
  const courseLevel = () => {
    let level = ''
    if (detail.courseLevel == 1) {
      level = '初级'
    } else if (detail.courseLevel == 2) {
      level = '中级'
    } else if (detail.courseLevel == 3) {
      level = '高级'
    }
    return level
  }
  // 点击立即学习按钮
  const clickStudyBtn = (video) => {
    // 1.判断有没有登录
    const userInfo = JSON.parse(storage.getStorage('userInfo')) || {}
    if (!userInfo.id) {
      errorNotifiy('您还未登录，请先登录')
      setTimeout(() => {
        history.replace('/u/toLogin')
      }, 1000)
      return
    }
    //2.已经登录，判断有没有权限看本节视频
    checkCourseAuth(video.courseId, video.id)
      .then((res) => {
        if (res.data?.hasAuth) {
          history.push(
            `/player/play?courseId=${video.courseId}&chapterId=${video.id}`
          )
        } else {
          errorNotifiy('您还未购买此课程或解锁该章节')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  // 点击下载资料按钮
  const downloadResourceClick = (resource) => {
    // 1.判断有没有登录
    const userInfo = JSON.parse(storage.getStorage('userInfo')) || {}
    if (!userInfo.id) {
      errorNotifiy('您还未登录，请先登录')
      setTimeout(() => {
        history.replace('/u/toLogin')
      }, 1000)
      return
    }
    //2.已经登录，判断有没有权限看本节视频
    checkCourseAuth(resource.courseId, resource.id)
      .then((res) => {
        if (res.data?.hasAuth) {
          //  下载资料
          downloadAttachment({
            courseId: resource.courseId, //课程ID
            attachmentId: resource.id //课程资料ID
          }).then((res) => {
            // 文件细节处理
            const blob = new Blob([res])
            let fileName = resource.attachmentName
            let fileUrl = resource.attachmentUrl
            const extName = fileUrl.substring(fileUrl.lastIndexOf('.'))
            fileName = fileName + extName
            const link = document.createElement('a')
            link.download = fileName
            link.target = '_blank'
            link.style.display = 'none'
            link.href = URL.createObjectURL(blob)
            document.body.appendChild(link)
            link.click()
            URL.revokeObjectURL(link.href)
            document.body.removeChild(link)
          })
        } else {
          errorNotifiy('您还未购买此课程或解锁该章节')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <Wrapper>
      <div className="courseInfoTop">
        <div className="info-container">
          <ul className="route">
            <li className="route-item">
              <Link to="/course" title="课程">
                课程
              </Link>
            </li>
            <li className="route-item arrow">
              <RightOutlined style={{ fontSize: '12px' }} />
            </li>
            <li className="route-item">
              <Link to="/course" title={courseType()}>
                {courseType()}
              </Link>
            </li>
            <li className="route-item arrow">
              <RightOutlined style={{ fontSize: '12px' }} />
            </li>
            <li className="route-item">
              <span>{detail.courseName}</span>
            </li>
          </ul>
          <div className="name nowrap">{detail.courseName}</div>
          <div className="info">
            <div className="Avat">
              <img
                src={AvatIcon}
                alt={detail.courseName}
                title={detail.courseName}
              />
            </div>
            <ul className="teacherName">
              <li className="name-item">
                <span>小鹿老师</span>
                <img src={teacherStart} alt="金牌讲师" />
              </li>
              <li className="name-item">金牌讲师</li>
            </ul>
            <ul className="access">
              <li className="access-item">难度</li>
              <li className="access-item"> {courseLevel()} </li>
              <li className="access-item">·</li>
              <li className="access-item">时长</li>
              <li className="access-item">
                {detail.totalHour?.toFixed(2) || '0.00'}
              </li>
              <li className="access-item">·</li>
              <li className="access-item">学习人数</li>
              <li className="access-item">
                {' '}
                {detail.purchaseCounter + detail.purchaseCnt}{' '}
              </li>
              <li className="access-item">·</li>
              <li className="access-item">综合评分</li>
              <li className="access-item">10.00</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="info-nav">
        <div className="container-xl">
          <ul className="nav nav-tabs">
            <li className="chapter-item">
              <div
                className={classNames([
                  'nav-link',
                  { active: navType === 'chapter' }
                ])}
                onClick={(e) => switchNavType('chapter')}
              >
                <span>课程章节</span>
              </div>
            </li>
            <li className="chapter-item">
              <div
                className={classNames([
                  'nav-link',
                  { active: navType === 'attachment' }
                ])}
                onClick={(e) => switchNavType('attachment')}
              >
                <span>下载资料</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-xl course-main ">
        {/* 课程章节 */}
        <div
          className={classNames([
            'course-chapter',
            { active: navType === 'chapter' }
          ])}
        >
          <div className="introduction">
            <div className="desc">{detail.description || '该课程暂无介绍'}</div>
            <div className="buy-btn-container">
              <div className="btn-item buy">立即购买</div>
              <div className="btn-item cart">加入购物车</div>
            </div>
          </div>
          {detail?.bizCourseChapters?.map((chapter) => {
            return (
              <div className="video" key={chapter.id}>
                <div className="chapterName nowrap">{chapter.chapterName}</div>
                <div className="chapterDesc nowrap">
                  {chapter.description || '该章节暂无介绍'}
                </div>
                <ul className="videos">
                  {chapter?.children?.map((video) => {
                    return (
                      <li className="video-item" key={video.id}>
                        <div className="video-item-left">
                          <div className="video-itemIcon">
                            <img src={videoIcon} alt="视频章节" />
                          </div>
                          <div className="item-name nowrap">
                            <span className="shipin">视频：</span>
                            <span className="chapterName">{video.name}</span>
                          </div>
                        </div>
                        <div
                          className="video-item-right"
                          onClick={() => clickStudyBtn(video)}
                        >
                          立即学习
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
        {/* 下载资料 */}
        <div
          className={classNames([
            'course-attachment',
            { active: navType === 'attachment' }
          ])}
        >
          {detail?.bizCourseAttachments?.length ? (
            detail.bizCourseAttachments.map((item) => {
              return (
                <div className="down" key={item.id}>
                  <div className="source">
                    <div className="source-left">
                      <img src={downLoad} alt="下载资料" />
                      <span className="nowrap">{item.attachmentName}</span>
                    </div>
                    <div
                      className="source-right"
                      onClick={() => {
                        downloadResourceClick(item)
                      }}
                    >
                      下载资料
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="empty-resource">
              <img src={emptyCourse} alt="课程资料为空" />
              <span>暂无课程资料</span>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  )
})

export default Coursedetail
