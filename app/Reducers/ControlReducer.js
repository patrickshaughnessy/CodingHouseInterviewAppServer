import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  viewing: null,
  fetching: false,
  error: null,
  success: null
})

const changeViewing = (state, action) => {
  return state.merge({
    viewing: action.categoryID
  })
}

const request = (state, action) =>
  state.merge({
    fetching: true,
    error: null,
    success: null
  })

const receive = (state, action) =>
  state.merge({
    fetching: false,
    error: null
  })

const failure = (state, action) =>
  state.merge({
    fetching: false,
    error: action.message || 'An unknown error occurred'
  })

const update = (state, action) =>
  state.merge({
    fetching: false,
    success: action.message || 'Success'
  })

const ACTION_HANDLERS = {
  [Types.CHANGE_VIEWING]: changeViewing,
  [Types.REQUEST_QUESTIONS]: request,
  [Types.RECEIVE_QUESTIONS]: receive,
  [Types.RECEIVE_QUESTIONS_FAILURE]: failure,
  [Types.ADD_QUESTION]: request,
  [Types.DELETE_QUESTION]: request,
  [Types.ADD_LEVEL]: request,
  [Types.EDIT_LEVEL]: request,
  [Types.DELETE_LEVEL]: request,
  [Types.ADD_QUESTION_SUCCESS]: update,
  [Types.DELETE_QUESTION_SUCCESS]: update,
  [Types.ADD_LEVEL_SUCCESS]: update,
  [Types.EDIT_LEVEL_SUCCESS]: update,
  [Types.DELETE_LEVEL_SUCCESS]: update,
  [Types.ADD_QUESTION_FAILURE]: failure,
  [Types.DELETE_QUESTION_FAILURE]: failure,
  [Types.ADD_LEVEL_FAILURE]: failure,
  [Types.EDIT_LEVEL_FAILURE]: failure,
  [Types.DELETE_LEVEL_FAILURE]: failure
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
