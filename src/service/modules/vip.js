import { HYRequestInstance } from '../index'
// 获取所有会员等级
export function getAllVipList() {
  return HYRequestInstance.post({
    url: '/vip/getAllVips'
  })
}
