import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  token: null,
  info: null
})

const setToken = (state, action) =>
  state.set('token', action.token)

const receiveUser = (state, action) => {
  const { token, user } = action
  return state.merge({
    token,
    info: user
  })
}

const reset = (state, action) =>
  state.merge({
    token: null,
    info: null
  })

const ACTION_HANDLERS = {
  [Types.SET_TOKEN]: setToken,
  [Types.LOGIN_SUCCESS]: receiveUser,
  [Types.LOGOUT]: reset
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
