import {
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS_SUCCESS,
  RECEIVE_QUESTIONS_FAILURE,
  CHANGE_VIEWING
} from './constants'

import {
  UPDATE_LEVEL,
  UPDATE_LEVEL_SUCCESS,
  UPDATE_LEVEL_FAILURE,
  DELETE_LEVEL,
  DELETE_LEVEL_SUCCESS,
  DELETE_LEVEL_FAILURE
} from '../Level/constants'

import {
  ADD_LEVEL,
  ADD_LEVEL_SUCCESS,
  ADD_LEVEL_FAILURE
} from '../NewLevelForm/constants'

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
        .setIn(['questionsById'], fromJS(mapItemsToIds(questions)))
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
    case ADD_LEVEL:
      return state
        .set('fetching', true)
    case ADD_LEVEL_SUCCESS:
      return state
        .set('fetching', false)
        .setIn(['questionsById', action.question._id], action.question)
    case ADD_LEVEL_FAILURE:
      return state
        .set('fetching', false)
        .set('error', action.error)
    case UPDATE_LEVEL:
      return state
        .set('fetching', true)
    case UPDATE_LEVEL_SUCCESS:
      return state
        .set('fetching', false)
        .setIn(['questionsById', action.question._id], action.question)
    case UPDATE_LEVEL_FAILURE:
      return state
        .set('fetching', false)
        .set('error', action.error)
    case DELETE_LEVEL:
      return state
        .set('fetching', true)
    case DELETE_LEVEL_SUCCESS:
      return state
        .set('fetching', false)
        .setIn(['questionsById', action.question._id], action.question)
    case DELETE_LEVEL_FAILURE:
      return state
        .set('fetching', false)
        .set('error', action.error)
    default:
      return state
  }
}

export default questionsReducer
