
import {
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS_SUCCESS,
  RECEIVE_QUESTIONS_FAILURE,
  CHANGE_VIEWING,
  ADD_QUESTION,
  ADD_QUESTION_SUCCESS,
  ADD_QUESTION_FAILURE
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

export function addQuestion (payload) {
  return {
    type: ADD_QUESTION,
    payload
  }
}

export function addQuestionSuccess (question) {
  return {
    type: ADD_QUESTION_SUCCESS,
    question
  }
}

export function addQuestionFailure (error) {
  return {
    type: ADD_QUESTION_FAILURE,
    error
  }
}
