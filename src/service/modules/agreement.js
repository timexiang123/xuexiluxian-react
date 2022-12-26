import { HYRequestInstance } from '../index'
// 通过code码获取用户服务协议或者隐私政策
export default function getAgreementByCode(code) {
  return HYRequestInstance.get({
    url: '/agreement/getAgreementByCode?code=' + code
  })
}
