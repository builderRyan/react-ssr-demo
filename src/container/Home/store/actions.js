import { CHANGE_NEWS_LIST } from './constants'

const createGetListAction = (list) => {
  return {
    type: CHANGE_NEWS_LIST,
    list
  }
}

export const getNewsList = () => {
  return (dispatch, getState, request) => {
    // http://192.168.2.220/api/getNewsList

    return request.get('/api/getNewsList').then((res) => {
      const list = res.data.data
      dispatch(createGetListAction(list))
    })
  }
}