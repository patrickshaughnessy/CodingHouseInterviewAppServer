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
    all: result.questions,
    byId: entities.questions
  })
}

const addQuestionSuccess = (state, action) => {
  const { result } = action.payload
  return state
        .update('all', (all) => all.asMutable().concat(result._id))
        .setIn(['byId', result._id], result)
}

const addLevelSuccess = (state, action) => {
  const { result } = action.payload
  return state.updateIn(['byId'], (l) => {
    const lvls = l.asMutable()
    lvls[result._id] = result
    return Immutable(lvls)
  })
}

const deleteLevelSuccess = (state, action) => {
  const { result } = action.payload
  return state.updateIn(['byId'], (l) => {
    const lvls = l.asMutable()
    lvls[result._id] = result
    return Immutable(lvls)
  })
}
//
// const changeViewing = (state, action) => {
//   return state.merge({
//     viewing: action.categoryID
//   })
// }

const ACTION_HANDLERS = {
  [Types.RECEIVE_QUESTIONS]: receiveQuestions,
  [Types.ADD_QUESTION_SUCCESS]: addQuestionSuccess,
  [Types.ADD_LEVEL_SUCCESS]: addLevelSuccess,
  [Types.DELETE_LEVEL_SUCCESS]: deleteLevelSuccess
  // [Types.CHANGE_VIEWING]: changeViewing
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
