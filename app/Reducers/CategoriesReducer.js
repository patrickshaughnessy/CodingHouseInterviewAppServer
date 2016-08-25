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

// const editLevelSuccess = (state, action) => {
//   const { entities } = action.payload
//   return state.updateIn(['levels'], (l) => {
//     const { levels } = entities
//     const lvls = l.asMutable()
//     for (let id in levels) {
//       lvls[id] = levels[id]
//     }
//     return Immutable(lvls)
//   })
// }

// const changeViewing = (state, action) => {
//   return state.merge({
//     viewing: action.categoryID
//   })
// }

const ACTION_HANDLERS = {
  [Types.RECEIVE_QUESTIONS]: receiveQuestions
  // [Types.EDIT_LEVEL_SUCCESS]: editLevelSuccess,
  // [Types.CHANGE_VIEWING]: changeViewing
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
