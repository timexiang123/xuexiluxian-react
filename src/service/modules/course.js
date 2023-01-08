import { HYRequestInstance } from '..'
// 获取一级分类数据
export function getFirstCategories() {
  return HYRequestInstance.get({
    url: '/course/category/getFirstCategorys'
  })
}
// 获取二级分类数据
export function getSecondCategories(categoryId = -1) {
  return HYRequestInstance.get({
    url: '/course/category/getSecondCategorys?categoryId=' + categoryId
  })
}
// 查询课程
export function queryCourses(data) {
  return HYRequestInstance.post({
    url: '/course/search',
    data
  })
}
