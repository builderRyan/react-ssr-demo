import React from 'react'
import { Route } from 'react-router-dom'
import App from './App'
import Home from './container/Home'
import Login from './container/Login'
import Favorites from './container/Favorites'
import NotFound from './container/404'

// const Routers = (
//   <div>
//     <Route path='/' exact component={Home} />
//     <Route path='/login' exact component={Login} />
//   </div>
// )

// 当我加载显示Home组件之前， 我希望调用Home.loadData方法，提前获取到必要的异步数据
// 然后再做服务器端渲染，把页面返回给用户

export default [
  {
    path: '/',
    component: App,
    loadData: App.loadData,
    key: 'app',
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: 'home',
      },
      {
        path: '/login',
        component: Login,
        exact: true,
        key: 'login'
      },
      {
        path: '/favorites',
        component: Favorites,
        exact: true,
        loadData: Favorites.loadData,
        key: 'favorites'
      },
      {
        component: NotFound
      }
    ]
  }
]