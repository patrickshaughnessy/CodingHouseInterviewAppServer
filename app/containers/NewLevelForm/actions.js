
import {
  ADD_LEVEL,
  ADD_LEVEL_SUCCESS,
  ADD_LEVEL_FAILURE
} from './constants'

export function addLevel (payload) {
  return {
    type: ADD_LEVEL,
    payload
  }
}

export function addLevelSuccess (question) {
  return {
    type: ADD_LEVEL_SUCCESS,
    question
  }
}

export function addLevelFailure (error) {
  return {
    type: ADD_LEVEL_FAILURE,
    error
  }
}
