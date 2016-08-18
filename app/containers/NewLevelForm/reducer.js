import {
  ADD_LEVEL,
  ADD_LEVEL_SUCCESS,
  ADD_LEVEL_FAILURE
} from './constants'

function levelsFormReducer (state = {}, action) {
  console.log(action)
  switch (action.type) {
    case ADD_LEVEL:
      return state
        .set('fetching', false)
    case ADD_LEVEL_SUCCESS:
      const { _id } = action.question
      console.log('here', action)
      return state
        .set('fetching', false)
        .setIn(['questionsById', _id], action.question)
    case ADD_LEVEL_FAILURE:
      return state
        .set('fetching', false)
        .set('error', action.error)
    default:
      return state
  }
}

export default levelsFormReducer
