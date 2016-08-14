/*
 * App Actions
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
  REQUEST_SETTINGS,
  RECEIVE_SETTINGS_SUCCESS,
  RECEIVE_SETTINGS_FAILURE
} from './constants'

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function requestSettings () {
  return {
    type: REQUEST_SETTINGS
  }
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function receiveSettingsSuccess (settings) {
  return {
    type: RECEIVE_SETTINGS_SUCCESS,
    settings
  }
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function receiveSettingsFailure (error) {
  return {
    type: RECEIVE_SETTINGS_FAILURE,
    error
  }
}
