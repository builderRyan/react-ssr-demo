import axios from 'axios'

const request = axios.create({
  baseURL: '/',
  withCredentials: true,
  timeout: 5000,
  params: {
    ID: 12345
  }
});

export default request;