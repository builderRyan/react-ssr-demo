const { getIPAdress } = require('./utils')

const ip = getIPAdress()

module.exports = {
  domain: `http://${ip}`,
  secret: 'ssr_2020'
}