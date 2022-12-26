import * as actionTypes from './constances'
const initState = {
  banners: [],
  firstCategories: [],
  mostNew: [],
  mostHeat: []
}
export default function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_FIRST_CATEGORIES:
      return { ...state, firstCategories: action.firstCategories }
    case actionTypes.GET_HOME_BANNERS:
      return { ...state, banners: action.banners }
    case actionTypes.GET_ACTIVE_BANNER:
      return { ...state, banner: action.banner }
    case actionTypes.GET_MOSTNEW_COURSES:
      return { ...state, mostNew: action.mostNew }
    case actionTypes.GET_MOSTHEAT_COURSES:
      return { ...state, mostHeat: action.mostHeat }
    default:
      return { ...state }
  }
}
