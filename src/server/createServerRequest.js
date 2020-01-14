import axios from 'axios'
import config from '../../config'

const createServerRequest = (req) => axios.create({
  baseURL: config.url,
  headers: {
    cookie: req.get('cookie') || ''
  },
  withCredentials: true,
  timeout: 5000,
  params: {
    secret: config.secret
  }
});

export default createServerRequest;