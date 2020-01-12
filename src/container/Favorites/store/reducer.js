import { CHANGE_FAVORITESLIST_LIST } from './constants'

const defaultState = {
  favoritesList: []
}

const favoritesReducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case CHANGE_FAVORITESLIST_LIST:
      return {
        ...state,
        favoritesList: actions.list
      }
    default: 
      return state;
  }
}

export default favoritesReducer