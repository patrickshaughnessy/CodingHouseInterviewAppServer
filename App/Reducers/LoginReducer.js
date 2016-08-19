import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  attempting: false,
  errorCode: null,
  errorMessage: null
})

// login attempts
const login = (state, action) =>
  state.merge({ attempting: true })

// successful logins
const success = (state, action) => {
  return state.merge({
    attempting: false,
    errorCode: null,
    errorMessage: null
  })
}

// login failure
const failure = (state, action) => {
  let { status, message } = action
  return state.merge({
    attempting: false,
    errorCode: status,
    errorMessage: message
  })
}

// const reset = (state, action) =>
//   state.merge({
//     errorCode: null,
//     errorMessage: null
//   })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.LOGIN]: login,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure
  // [Types.LOGOUT]: reset,
  // [Types.RESET]: reset
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
