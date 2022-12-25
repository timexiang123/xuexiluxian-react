import * as actionTypes from './constances'
import { getHomeBanners } from '@/service/modules/home'
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
