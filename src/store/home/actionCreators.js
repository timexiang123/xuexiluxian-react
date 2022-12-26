import * as actionTypes from './constances'
import {
  getHomeBanners,
  getFirstCategories,
  getMostNewCourses,
  getMostHeatCourses
} from '@/service/modules/home'
// 获取首页轮播图
export const getHomeBannersAction = () => {
  return (dispatch) => {
    getHomeBanners()
      .then((res) => {
        if (res.list && res.list.length) {
          dispatch({
            type: actionTypes.GET_HOME_BANNERS,
            banners: res.list
          })
          dispatch({
            type: actionTypes.GET_ACTIVE_BANNER,
            banner: res.list[0]?.imageUrl
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
// 获取激活的banner
export const getActiveBannerAction = (banner) => {
  return {
    type: actionTypes.GET_ACTIVE_BANNER,
    banner
  }
}
//获取一级分类
export function getFirstCategoriesAction() {
  return (dispatch) => {
    getFirstCategories()
      .then((res) => {
        if (res.list && res.list.length) {
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
// 获取最新课程
export function getMostNewCoursesAction() {
  return (dispatch) => {
    getMostNewCourses()
      .then((res) => {
        if (res?.pageInfo?.list?.length) {
          dispatch({
            type: actionTypes.GET_MOSTNEW_COURSES,
            mostNew: res.pageInfo.list
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
// 获取最热课程
export function getMostHeatCoursesAction() {
  return (dispatch) => {
    getMostHeatCourses()
      .then((res) => {
        if (res?.pageInfo?.list?.length) {
          dispatch({
            type: actionTypes.GET_MOSTHEAT_COURSES,
            mostHeat: res.pageInfo.list
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
