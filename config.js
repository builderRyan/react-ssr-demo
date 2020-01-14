const { getIPAdress } = require('./utils')

const ip = getIPAdress()
const port = 86
const url = `http://${ip}:${port}`

module.exports = {
  port,
  url,
  secret: 'ssr_2020'
}