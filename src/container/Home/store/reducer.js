import { CHANGE_NEWS_LIST } from './constants'

const defaultState = {
  name: 'builderRyan',
  newsList: []
}

const homeReducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case CHANGE_NEWS_LIST:
      return {
        ...state,
        newsList: actions.list
      }
    default: 
      return state;
  }
}

export default homeReducer