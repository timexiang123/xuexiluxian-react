import * as actionTypes from './constances'
const initState = {
  userService: {},
  privacyPolicy: {}
}
export default function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_USER_SERVICE:
      return { ...state, userService: action.userService }
    case actionTypes.GET_PRIVACY_POLICY:
      return { ...state, privacyPolicy: action.privacyPolicy }
    default:
      return { ...state }
  }
}
