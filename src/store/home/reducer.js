import * as actionTypes from './constances'
const initState = {
  banners: []
}
export default function (state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_HOME_BANNERS:
      return { ...state, banners: action.banners }
    case actionTypes.GET_ACTIVE_BANNER:
      return {...state,banner:action.banner}
    default:
      return { ...state }
  }
}
