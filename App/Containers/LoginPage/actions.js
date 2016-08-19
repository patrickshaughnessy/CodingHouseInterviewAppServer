/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your appliction state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './constants'

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeEmail (email) {
  return {
    type: CHANGE_EMAIL,
    email
  }
}

export function changePassword (password) {
  return {
    type: CHANGE_PASSWORD,
    password
  }
}

export function login ({ email, password }) {
  return {
    type: LOGIN_ATTEMPT,
    email,
    password
  }
}

export function loginSuccess (payload) {
  return {
    type: LOGIN_SUCCESS,
    ...payload
  }
}

export function loginFailure (error) {
  return {
    type: LOGIN_FAILURE,
    error
  }
}
