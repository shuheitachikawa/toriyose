import {
  createStore as reduxCreateStore,
  combineReducers,
  // applyMiddleware
} from 'redux'

// import { connectRouter, routerMiddleware } from "connected-react-router"

// Import reducers
import { UsersReducers } from '../users/reducers'
// import { ProductsReducer } from '../products/reducers' →増えた場合、このように追加していく。

export default function createStore() {
  return reduxCreateStore(
    // ↓reducersが分割していた場合、まとめる役割。stateをまとめたオブジェクトがリターンされる関数
    combineReducers({
      // router: connectRouter(history),
      users: UsersReducers,
      // products: ProductsReducer,
    }),
    // applyMiddleware(routerMiddleware(history))
  )
}