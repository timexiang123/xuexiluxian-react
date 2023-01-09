import * as actionTypes from './constances'
const initState = {
  vipList: []
}
export default function (state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_VIP_LIST:
      return { ...state, vipList: action.vipList }
    default:
      return { ...state }
  }
}
