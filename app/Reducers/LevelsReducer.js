import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  byId: {}
})

const receiveQuestions = (state, action) => {
  const { entities } = action.payload
  return state.merge({
    byId: entities.levels
  })
}

const addLevelSuccess = (state, action) => {
  const { entities } = action.payload
  return state.updateIn(['byId'], (l) => {
    const { levels } = entities
    const lvls = l.asMutable()
    for (let id in levels) {
      lvls[id] = levels[id]
    }
    return Immutable(lvls)
  })
}

const editLevelSuccess = (state, action) => {
  const { entities } = action.payload
  return state.updateIn(['byId'], (l) => {
    const { levels } = entities
    const lvls = l.asMutable()
    for (let id in levels) {
      lvls[id] = levels[id]
    }
    return Immutable(lvls)
  })
}

const reset = (state, action) =>
  state.merge({
    byId: {}
  })

const ACTION_HANDLERS = {
  [Types.RECEIVE_QUESTIONS]: receiveQuestions,
  [Types.ADD_QUESTION_SUCCESS]: addLevelSuccess,
  [Types.ADD_LEVEL_SUCCESS]: addLevelSuccess,
  [Types.EDIT_LEVEL_SUCCESS]: editLevelSuccess,
  [Types.LOGOUT]: reset
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
