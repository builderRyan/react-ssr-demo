import { CHANGE_LOGIN } from './constants'

const defaultState = {
  login: true
}

const headerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return {
        ...state,
        login: action.value
      }
    default:
      return state
  }
}

export default headerReducer