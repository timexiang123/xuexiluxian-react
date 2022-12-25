import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import Thunk from 'redux-thunk'
import homeReducer from './home/reducer'
const reducer = combineReducers({
  home: homeReducer
})
// 开启redux-devtools调试
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default createStore(reducer, composeEnhancers(applyMiddleware(Thunk)))
