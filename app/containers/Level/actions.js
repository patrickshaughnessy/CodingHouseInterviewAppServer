
import {
  UPDATE_LEVEL,
  UPDATE_LEVEL_SUCCESS,
  UPDATE_LEVEL_FAILURE
} from './constants'

export function updateLevel (payload) {
  return {
    type: UPDATE_LEVEL,
    payload
  }
}

export function updateLevelSuccess (question) {
  return {
    type: UPDATE_LEVEL_SUCCESS,
    question
  }
}

export function updateLevelFailure (error) {
  return {
    type: UPDATE_LEVEL_FAILURE,
    error
  }
}
