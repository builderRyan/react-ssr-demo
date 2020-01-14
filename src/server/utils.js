import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'

export const render = ({store, routes, req, context}) => {
  const helmetContext = {}
  const content = renderToString(
    <HelmetProvider context={helmetContext}>
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          <div>
            {renderRoutes(routes)}
          </div>
        </StaticRouter>
      </Provider>
    </HelmetProvider>
  )

  // const helmet = Helmet.renderStatic()
  const { helmet } = helmetContext;

  const stylesStr = context.styles && context.styles.join('\n') ||''

  return (
    `<html lang="en">
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      <meta name="referrer" content="no-referrer">
      <style>
        ${stylesStr}
      </style>
    </head>
    <body>
      <div id='root'>
        ${content}
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