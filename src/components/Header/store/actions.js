import { CHANGE_LOGIN} from './constants'

const changeLogin = (value) => {
  return {
    type: CHANGE_LOGIN,
    value
  }
}

export const getLoginInfo = () => {
  return (dispatch, getState, request) => {
    return request.get('/api/getLoginInfo').then((res) => {
      const value = res.data.data
      dispatch(changeLogin(value))
    })
  }
}

export const login = () => {
  return (dispatch, getState, request) => {
    return request.get('/api/login').then((res) => {
      if (res.data.ret === 0) {
        dispatch(changeLogin(true))
      }
    })
  }
}

export const logout = () => {
  return (dispatch, getState, request) => {
    return request.get('/api/logout').then((res) => {
      if (res.data.ret === 0) {
        dispatch(changeLogin(false))
      }
    })
  }
}