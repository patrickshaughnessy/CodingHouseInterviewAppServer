
import {
  REQUEST_SETTINGS,
  RECEIVE_SETTINGS_SUCCESS,
  RECEIVE_SETTINGS_FAILURE
} from './constants'

export function requestSettings () {
  return {
    type: REQUEST_SETTINGS
  }
}

export function receiveSettingsSuccess (settings) {
  return {
    type: RECEIVE_SETTINGS_SUCCESS,
    ...settings
  }
}

export function receiveSettingsFailure (error) {
  return {
    type: RECEIVE_SETTINGS_FAILURE,
    error
  }
}
