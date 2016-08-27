import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  all: [],
  byId: {}
})

const receiveQuestions = (state, action) => {
  const { entities, result } = action.payload
  return state.merge({
    all: result.categories,
    byId: entities.categories
  })
}

const ACTION_HANDLERS = {
  [Types.RECEIVE_QUESTIONS]: receiveQuestions
  // [Types.EDIT_LEVEL_SUCCESS]: editLevelSuccess,
  // [Types.CHANGE_VIEWING]: changeViewing
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
