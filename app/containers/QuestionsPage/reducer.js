import {
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS_SUCCESS,
  RECEIVE_QUESTIONS_FAILURE,
  CHANGE_VIEWING
} from './constants'

import { fromJS } from 'immutable'

const initialState = fromJS({
  questions: null,
  categories: null,
  categoriesById: null,
  questionsById: null,
  questionsByCategory: null,
  viewing: null,
  fetching: null,
  error: null
})

const mapItemsToIds = (items) => {
  return items.reduce((a, item) => {
    a[item._id] = item
    return a
  }, {})
}

const mapQuestionsToCategories = (questions) => {
  return questions.reduce((a, question) => {
    let { category: {_id: _id} } = question
    a[_id] = a[_id] ? a[_id].concat(question._id) : [question._id]
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
        .set('questions', questions)
        .set('questionsById', mapItemsToIds(questions))
        .set('categories', categories)
        .set('categoriesById', mapItemsToIds(categories))
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
