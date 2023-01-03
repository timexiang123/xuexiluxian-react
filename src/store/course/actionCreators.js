import * as actionTypes from './constances'
import {
  getFirstCategories,
  getSecondCategories
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
