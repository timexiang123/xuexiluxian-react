import * as actionTypes from './constances'
import { getAllVipList } from '@/service/modules/vip'
export function getVipListAction() {
  return (dispatch) => {
    getAllVipList()
      .then((res) => {
        if(res.list?.length){
          dispatch({
            type:actionTypes.GET_VIP_LIST,
            vipList:res.list
          })
        }
      })
      .catch((err) => {
        console.log('获取会员等级数据失败', err)
      })
  }
}
