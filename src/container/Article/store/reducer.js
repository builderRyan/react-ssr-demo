import { UPDATE_ARTICLE, CLEAR_ARTICLE } from './constants'

const defaultState = {
  article: ''
}

const articleReducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case UPDATE_ARTICLE:
      return {
        ...state,
        articleDetails: actions.article
      }
    case CLEAR_ARTICLE:
      return {
        ...state,
        articleDetails: {}
      }
    default:
      return state;
  }
}

export default articleReducer