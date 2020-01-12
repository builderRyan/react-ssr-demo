import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import clientRequest from '../client/request'
import createServerRequest from '../server/createServerRequest'
import { headerReducer } from '../component/Header/store'
import { homeReducer } from '../container/Home/store'
import { favoritesReducer } from '../container/Favorites/store'

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
  favorites: favoritesReducer
})

// 单例的 store
// const store = createStore(reducer, applyMiddleware(thunk))

export const getStore = (req) => {
  // 改变服务器端的 store 内容，我们用 serverRequest
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(createServerRequest(req))))
}

export const getClientStore = () => {
  // 改变客户端的 store 内容, 我们用 clientRequest
  const defaultStore = window.context.state
  return createStore(reducer, defaultStore, applyMiddleware(thunk.withExtraArgument(clientRequest)))
}