import * as actionTypes from './constances'
import getAgreementByCode from '@/service/modules/agreement'
// 获取用户服务协议
export const getUserServiceAction = ()=>{
  return (dispatch)=>{
    getAgreementByCode('6HG6326I').then(res=>{
      if(res.data?.id){
        dispatch({
          type:actionTypes.GET_USER_SERVICE,
          userService:res.data
        })
      }
    }).catch(err=>{
      console.log(err)
    })
  }
}
// 获取隐私政策
export const getPrivacyPolicyAction = ()=>{
  return (dispatch)=>{
    getAgreementByCode('6GFL2QGQ').then(res=>{
      if(res.data?.id){
        dispatch({
          type:actionTypes.GET_PRIVACY_POLICY,
          privacyPolicy:res.data
        })
      }
    }).catch(err=>{
      console.log(err)
    })
  }
}