import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  all: [],
  questionsById: {}
})

const mapQuestionsToIds = (questions) => {
  return questions.reduce((a, question) => {
    a[question._id] = question
    return a
  }, {})
}

const receiveQuestions = (state, action) => {
  const { questions } = action
  return state.merge({
    all: questions,
    questionsById: mapQuestionsToIds(questions)
  })
}

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.RECEIVE_QUESTIONS]: receiveQuestions
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
