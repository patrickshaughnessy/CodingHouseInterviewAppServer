import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  token: null,
  info: {
    _id: '576db18b6594440300261e16'
  }
})

// login attempts
const receiveUser = (state, action) => {
  const { token, user } = action
  return state.merge({
    token,
    info: user
  })
}

// // successful logins
// const success = (state, action) => {
//   return state.merge({
//     attempting: false,
//     errorCode: null,
//     errorMessage: null
//   })
// }
//
// // login failure
// const failure = (state, action) => {
//   let { status, message } = action
//   return state.merge({
//     attempting: false,
//     errorCode: status,
//     errorMessage: message
//   })
// }

// const reset = (state, action) =>
//   state.merge({
//     errorCode: null,
//     errorMessage: null
//   })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.LOGIN_SUCCESS]: receiveUser
  // [Types.LOGOUT]: reset,
  // [Types.RESET]: reset
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
