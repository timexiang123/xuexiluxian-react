import * as actionTypes from './constances'
const initState = {
  firstCategories: [],
  secondCategories: []
}
export default function (state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_FIRST_CATEGORIES:
      return { ...state, firstCategories: action.firstCategories }
    case actionTypes.GET_SECOND_CATEGORIES:
      return { ...state, secondCategories: action.secondCategories }
    default:
      return { ...state }
  }
}
