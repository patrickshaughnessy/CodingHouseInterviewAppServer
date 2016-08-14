/*
 * AppReducer
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
  REQUEST_SETTINGS,
  RECEIVE_SETTINGS_SUCCESS,
  RECEIVE_SETTINGS_FAILURE
} from './constants'
import { fromJS } from 'immutable'

// The initial state of the App
const initialState = fromJS({
  settings: null,
  fetching: null,
  error: null
})

function appReducer (state = initialState, action) {
  switch (action.type) {
    case REQUEST_SETTINGS:
      return state
        .set('fetching', true)
        .set('error', false)
        .set('settings', null)
    case RECEIVE_SETTINGS_SUCCESS:
      return state
        .set('fetching', false)
        .set('settings', fromJS(action.settings))
    case RECEIVE_SETTINGS_FAILURE:
      return state
        .set('fetching', false)
        .set('error', action.error)
    default:
      return state
  }
}

export default appReducer
