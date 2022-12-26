import { HYRequestInstance } from '../index'
// 获取首页轮播图
export function getHomeBanners() {
  return HYRequestInstance.get({
    url: '/slider/getSliders'
  })
}
// 获取一级分类数据
export function getFirstCategories() {
  return HYRequestInstance.get({
    url: '/course/category/getFirstCategorys'
  })
}
// 获取最新课程
export function getMostNewCourses() {
  return HYRequestInstance.post({
    url: '/course/mostNew',
    data: {
      pageNum: 1,
      pageSize: 8,
      entity: {
        sortBy: 'clicks-desc'
      }
    }
  })
}
// 获取最热课程
export function getMostHeatCourses() {
  return HYRequestInstance.post({
    url: '/course/mostHeat',
    data: {
      pageNum: 1,
      pageSize: 6,
      entity: {
        sortBy: 'purchase-desc'
      }
    }
  })
}
