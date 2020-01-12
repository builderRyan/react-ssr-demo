import axios from 'axios'
import config from '../../config'

const createServerRequest = (req) => axios.create({
  baseURL: 'http://192.168.2.220/',
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