import React from 'react'
import { renderRoutes }  from 'react-router-config'
import { Header } from './component'
import { headerActions } from './component/Header/store/'

const App = props => {
  // console.log(props)

  return (
    <div>
      <Header staticContext={props.staticContext} />
      {renderRoutes(props.route.routes)}
    </div>
  )
}

App.loadData = (store) => {
  // 这个函数负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(headerActions.getLoginInfo())
}

export default App