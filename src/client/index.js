import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { HelmetProvider } from 'react-helmet-async'

import { Provider } from 'react-redux'
import { getClientStore } from '../store'
import routes from '../Routes'

const App = () => {
  const store = getClientStore()
  
  return (
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <div>
            {renderRoutes(routes)}
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  )
}

// ReactDom.hydrate()
ReactDom.render(<App />, document.getElementById('root'))