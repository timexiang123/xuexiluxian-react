import * as actionTypes from './constances'
const initState = {
  firstCategories: [],
  secondCategories: [],
  courses: {},
  detail: {}
}
export default function (state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_FIRST_CATEGORIES:
      return { ...state, firstCategories: action.firstCategories }
    case actionTypes.GET_SECOND_CATEGORIES:
      return { ...state, secondCategories: action.secondCategories }
    case actionTypes.QUERY_COURSES:
      return { ...state, courses: action.courses }
    case actionTypes.GET_COURSE_DETAIL:
      return { ...state, detail: action.detail }
    default:
      return { ...state }
  }
}
