import {
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS_SUCCESS,
  RECEIVE_QUESTIONS_FAILURE,
  CHANGE_VIEWING
} from './constants'
import { fromJS } from 'immutable'

// The initial state of the App
const initialState = fromJS({
  questions: null,
  categories: null,
  questionsByCategory: null,
  viewing: null,
  fetching: null,
  error: null
})

const mapQuestionsToCategories = (questions) => {
  return questions.reduce((a, question) => {
    let { category: {_id: _id} } = question
    a[_id] = a[_id] ? a[_id].concat(question) : [question]
    return a
  }, {})
}

function questionsReducer (state = initialState, action) {
  switch (action.type) {
    case REQUEST_QUESTIONS:
      return state
        .set('fetching', true)
        .set('error', false)
        .set('questions', null)
    case RECEIVE_QUESTIONS_SUCCESS:
      const { questions, categories } = action
      return state
        .set('fetching', false)
        .set('categories', categories)
        .set('questions', questions)
        .set('questionsByCategory', mapQuestionsToCategories(questions))
        .set('viewing', categories && categories[0]._id)
    case RECEIVE_QUESTIONS_FAILURE:
      return state
        .set('fetching', false)
        .set('error', action.error)
    case CHANGE_VIEWING:
      return state
        .set('viewing', action.categoryID)
    default:
      return state
  }
}

export default questionsReducer
