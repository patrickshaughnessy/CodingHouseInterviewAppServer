import {
  DELETE_QUESTION,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_FAILURE
} from './constants'

export function deleteQuestion (id) {
  return {
    type: DELETE_QUESTION,
    ...id
  }
}

export function deleteQuestionSuccess (question) {
  return {
    type: DELETE_QUESTION_SUCCESS,
    question
  }
}

export function deleteQuestionFailure (error) {
  return {
    type: DELETE_QUESTION_FAILURE,
    error
  }
}
