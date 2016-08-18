import {
  UPDATE_LEVEL,
  UPDATE_LEVEL_SUCCESS,
  UPDATE_LEVEL_FAILURE
} from './constants'

function levelsReducer (state = {}, action) {
  switch (action.type) {
    case UPDATE_LEVEL:
      return state
        .set('fetching', false)
    case UPDATE_LEVEL_SUCCESS:
      const { _id } = action.question
      return state
        .set('fetching', false)
        .setIn(['questionsById', _id], action.question)
    case UPDATE_LEVEL_FAILURE:
      return state
        .set('fetching', false)
        .set('error', action.error)
    default:
      return state
  }
}

export default levelsReducer
