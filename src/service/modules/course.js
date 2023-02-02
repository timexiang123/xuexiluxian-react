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
// 获取课程详情
export function getCourseDetail(courseId) {
  return HYRequestInstance.get({
    url: '/course/getDetail',
    params: {
      courseId
    }
  })
}
// 查看课程是否有权限
export function checkCourseAuth(courseId) {
  return HYRequestInstance.get({
    url: '/course/checkAuth',
    headers: {
      requiredToken: true
    },
    params: {
      courseId
    }
  })
}
//下载课程资料
export function downloadAttachment(params) {
  return HYRequestInstance.get({
    url: '/course/downloadAttachment',
    headers: {
      requiredToken: true
    },
    params,
    responseType: 'blob'
  })
}
