import { CHANGE_NEWS_LIST } from './constants'

const createGetListAction = (list) => {
  return {
    type: CHANGE_NEWS_LIST,
    list
  }
}

export const getArticles = () => {
  return (dispatch, getState, request) => {
    return request.get('/api/getArticles').then((res) => {
      const list = res.data.data
      dispatch(createGetListAction(list))
    })
  }
}