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

const addCategory = (state, action) => {
  const { category } = action
  return state
  .update('all', (all) => all.asMutable().concat(category._id))
  .setIn(['byId', category._id], category)
}

const reset = (state, action) =>
  state.merge({
    all: [],
    byId: {}
  })

const ACTION_HANDLERS = {
  [Types.RECEIVE_QUESTIONS]: receiveQuestions,
  [Types.ADD_CATEGORY_SUCCESS]: addCategory,
  [Types.LOGOUT]: reset
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
