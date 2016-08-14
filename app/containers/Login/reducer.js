/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './constants'
import { fromJS } from 'immutable'

// The initial state of the App
const initialState = fromJS({
  email: 'admin@admin.com',
  password: 'admin',
  attempting: false,
  user: null,
  token: null,
  error: null
})

function homeReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_EMAIL:
      return state
        .set('email', action.email)
    case CHANGE_PASSWORD:
      return state
        .set('password', action.password)
    case LOGIN_ATTEMPT:
      return state
        .set('attempting', true)
    case LOGIN_SUCCESS:
      const { user, token } = action
      return state
        .set('attempting', false)
        .set('user', fromJS(user))
        .set('token', token)
    case LOGIN_FAILURE:
      const { error } = action
      return state
        .set('error', error)
        .set('attempting', false)
        .set('user', null)
    default:
      return state
  }
}

export default homeReducer
