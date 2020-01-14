import express from 'express'
import { matchRoutes } from 'react-router-config'
import proxy from 'http-proxy-middleware'
import { getStore } from '../store'
import routes from '../Routes'
import { render } from './utils'
import config from '../../config'

const app = express()

app.use(express.static('public'))

app.use(
  '/api',
  proxy({
    target: config.url,
    changeOrigin: true
  })
)

app.get('*', (req, res) => {
  const store = getStore(req)

  // 根据路由的路径来往store里填数据
  const matchedRoutes = matchRoutes(routes, req.path)

  // console.log(matchedRoutes);
  
  // const matched = []
  // routes.some((route) => {
  //   const match = matchPath(req.path, route)
  //   if (match) {
  //     matched.push(route)
  //   } 
  // })

  // 让 matchedRoutes 里面所有的组件对应的loadData都执行一次
  const promises = []
  matchedRoutes.forEach((item) => {
    if (item.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store, req).then(resolve).catch(resolve)
      })
      promises.push(promise)
    }
  }) 

  Promise.all(promises).then(() => {
    let context = {
      styles: []
    }
    const html = render({store, routes, req, context})

    // console.log('context', context)
    if (context.action === 'REPLACE') {
      res.redirect(301, context.url)
    } else if (context.pageName === 404) {
      res.status(404)
    }
    res.send(html)
  })
})

app.listen(3000)