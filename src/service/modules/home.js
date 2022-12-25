import {HYRequestInstance} from '../index'
// 获取首页轮播图
export function getHomeBanners(){
  return HYRequestInstance.get({
    url:'/slider/getSliders'
  })
}