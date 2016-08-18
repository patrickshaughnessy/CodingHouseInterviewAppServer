
import {
  UPDATE_LEVEL,
  UPDATE_LEVEL_SUCCESS,
  UPDATE_LEVEL_FAILURE,
  DELETE_LEVEL,
  DELETE_LEVEL_SUCCESS,
  DELETE_LEVEL_FAILURE
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

export function deleteLevel (levelID) {
  return {
    type: DELETE_LEVEL,
    ...levelID
  }
}

export function deleteLevelSuccess (question) {
  return {
    type: DELETE_LEVEL_SUCCESS,
    question
  }
}

export function deleteLevelFailure (error) {
  return {
    type: DELETE_LEVEL_FAILURE,
    error
  }
}
