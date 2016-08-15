
import {
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS_SUCCESS,
  RECEIVE_QUESTIONS_FAILURE,
  CHANGE_VIEWING
} from './constants'

export function requestQuestions () {
  return {
    type: REQUEST_QUESTIONS
  }
}

export function receiveQuestionsSuccess (payload) {
  return {
    type: RECEIVE_QUESTIONS_SUCCESS,
    ...payload
  }
}

export function receiveQuestionsFailure (error) {
  return {
    type: RECEIVE_QUESTIONS_FAILURE,
    error
  }
}

export function changeViewing (categoryID) {
  return {
    type: CHANGE_VIEWING,
    categoryID
  }
}
