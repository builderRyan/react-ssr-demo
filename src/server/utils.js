import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { Helmet } from 'react-helmet'

export const render = ({store, routes, req, context}) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>
          {/* 只能使用在一级路由的情况 */}
          {/* {routes.map((route) => (
            <Route {...route} />
          ))} */}
          {renderRoutes(routes)}
        </div>
      </StaticRouter>
    </Provider>
  )

  const helmet = Helmet.renderStatic()

  const stylesStr = context.styles && context.styles.join('\n') ||''

  return (
    `<html lang="en">
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      <style>
        ${stylesStr}
      </style>
    </head>
    <body>
      <div id='root'>
        <h1>${content}</h1>
      </div>
      <script>
        window.context = {
          state: ${JSON.stringify(store.getState())}
        }
      </script>
      <script type="text/javascript" src='/index.js'></script>
    </body>
    </html>`
  )
}