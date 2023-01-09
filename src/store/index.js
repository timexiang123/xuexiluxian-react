import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import Thunk from 'redux-thunk'
import homeReducer from './home/reducer'
import agreementReducer from './agreement/reducer'
import courseReducer from './course/reducer'
import vipReducer from './vip/reducer'
const reducer = combineReducers({
  home: homeReducer,
  agreement: agreementReducer,
  course: courseReducer,
  vip:vipReducer
})
// 开启redux-devtools调试
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default createStore(reducer, composeEnhancers(applyMiddleware(Thunk)))
