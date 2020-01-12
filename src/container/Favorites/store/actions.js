import { CHANGE_FAVORITESLIST_LIST } from './constants'

const favoritesList = (list) => {
  return {
    type: CHANGE_FAVORITESLIST_LIST,
    list
  }
}

export const getFavoritesList = () => {
  return (dispatch, getState, request) => {
    return request.get('/api/getFavoritesList').then((res) => {
      const list = res.data.data
      dispatch(favoritesList(list))
    })
  }
}