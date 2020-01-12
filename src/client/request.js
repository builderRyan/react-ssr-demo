import axios from 'axios'
import config from '../../config'

const request = axios.create({
  baseURL: '/',
  withCredentials: true,
  timeout: 5000,
  params: {
    ID: 12345
  }
});

export default request;