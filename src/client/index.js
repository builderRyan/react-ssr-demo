import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route  } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { getClientStore } from '../store'
import routes from '../Routes'

const App = () => {
  const store = getClientStore()
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {renderRoutes(routes)}
        </div>
      </BrowserRouter>
    </Provider>
  )
}

// ReactDom.hydrate()
ReactDom.render(<App />, document.getElementById('root'))