import * as actionTypes from './constances'
import {
  getFirstCategories,
  getSecondCategories,
  queryCourses,
  getCourseDetail
} from '@/service/modules/course'
// 请求一级分类数据
export const getFirstCategoriesAction = () => {
  return (dispatch) => {
    getFirstCategories()
      .then((res) => {
        if (res.list?.length) {
          res.list.unshift({
            id: -1,
            categoryName: '全部'
          })
          dispatch({
            type: actionTypes.GET_FIRST_CATEGORIES,
            firstCategories: res.list
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
// 请求二级分类数据
export const getSecondCategoriesAction = (id) => {
  return (dispatch) => {
    getSecondCategories(id)
      .then((res) => {
        if (res.list?.length) {
          res.list.unshift({
            id: -1,
            categoryName: '全部'
          })
          dispatch({
            type: actionTypes.GET_SECOND_CATEGORIES,
            secondCategories: res.list
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
// 查询课程
export const queryCoursesAction = (data) => {
  return (dispatch) => {
    queryCourses(data)
      .then((res) => {
        if (res.pageInfo?.list) {
          dispatch({
            type: actionTypes.QUERY_COURSES,
            courses: res.pageInfo
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
// 获取课程详情
export const getCourseDetailAction = (courseId) => {
  return (dispatch) => {
    getCourseDetail(courseId)
      .then((res) => {
        if (res?.data?.id) {
          dispatch({
            type: actionTypes.GET_COURSE_DETAIL,
            detail: res.data
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
