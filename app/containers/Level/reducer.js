import {
  UPDATE_LEVEL,
  UPDATE_LEVEL_SUCCESS,
  UPDATE_LEVEL_FAILURE
} from './constants'

import {
  selectQuestionsState
} from '../QuestionsPage/selectors'

function levelsReducer (state = selectQuestionsState(), action) {
  switch (action.type) {
    case UPDATE_LEVEL:
      return state
        .set('fetching', false)
    case UPDATE_LEVEL_SUCCESS:
      const { _id, category } = action.question
      return state
        .set('fetching', false)
        .setIn(['questionsByCategory', category._id, _id])
    case UPDATE_LEVEL_FAILURE:
      return state
        .set('fetching', false)
        .set('error', action.error)
    default:
      return state
  }
}

export default levelsReducer
