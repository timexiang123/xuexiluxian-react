import * as actionTypes from './constances'
const initState = {
  token: '',
  userInfo: {}
}
export default function (state = initState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_BY_PWD:
      return { ...state, token: action.token }
    case actionTypes.GET_USERINFO:
      return { ...state, userInfo: action.userInfo }
    default:
      return { ...state }
  }
}
