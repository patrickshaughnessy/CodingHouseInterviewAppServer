import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  all: [],
  byId: {}
})

const receiveInterviews = (state, action) => {
  const { result, entities } = action.payload
  return state.merge({
    all: result,
    byId: entities.interviews
  })
}

const ACTION_HANDLERS = {
  [Types.RECEIVE_INTERVIEWS]: receiveInterviews
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
