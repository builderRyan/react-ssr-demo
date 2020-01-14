import { UPDATE_ARTICLE, CLEAR_ARTICLE } from './constants'

const updateAticle = (article) => {
  return {
    type: UPDATE_ARTICLE,
    article
  }
}

const deleteAticle = () => {
  return {
    type: CLEAR_ARTICLE
  }
}

export const getArticle = (id) => {
  return (dispatch, getState, request) => {
    return request.get('/api/getArticlesById', {
      params: {
        id
      }
    }).then((res) => {
      const result = res.data.data
      dispatch(updateAticle(result))
    })
  }
}

export const clearArticle = () => {
  return (dispatch) => {
    return dispatch(deleteAticle())
  }
}