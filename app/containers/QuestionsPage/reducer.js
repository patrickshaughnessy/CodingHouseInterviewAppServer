import {
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS_SUCCESS,
  RECEIVE_QUESTIONS_FAILURE,
  CHANGE_VIEWING,
  ADD_QUESTION,
  ADD_QUESTION_SUCCESS,
  ADD_QUESTION_FAILURE
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

import {
  DELETE_QUESTION,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_FAILURE
} from '../Question/constants'

import { fromJS } from 'immutable'

const initialState = fromJS({
  questions: [],
  categories: [],
  categoriesById: {},
  questionsById: {},
  questionsByCategory: {},
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
        .set('questionsByCategory', fromJS(mapQuestionsToCategories(questions)))
        .set('viewing', categories && categories[0]._id)
    case RECEIVE_QUESTIONS_FAILURE:
      return state
        .set('fetching', false)
        .set('error', action.error)
    case CHANGE_VIEWING:
      return state
        .set('viewing', action.categoryID)
    case ADD_QUESTION:
      return state
        .set('fetching', true)
    case ADD_QUESTION_SUCCESS:
      return state
        .set('fetching', false)
        .mergeIn(['questionsById'], fromJS(mapItemsToIds([action.question])))
        .updateIn(['questionsByCategory', action.question.category], questions => questions.push(action.question._id))
    case ADD_QUESTION_FAILURE:
      return state
        .set('fetching', false)
        .set('error', action.error)
    case DELETE_QUESTION:
      return state
        .set('fetching', true)
    case DELETE_QUESTION_SUCCESS:
      return state
        .set('fetching', false)
        .deleteIn(['questionsById', action.question._id], action.question._id.toString())
        .updateIn(['questionsByCategory', action.question.category], questions => questions.filter(id => id !== action.question._id))
    case DELETE_QUESTION_FAILURE:
      return state
        .set('fetching', false)
        .set('error', action.error)
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
