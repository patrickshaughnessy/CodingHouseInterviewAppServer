import {
  REQUEST_SETTINGS,
  RECEIVE_SETTINGS_SUCCESS,
  RECEIVE_SETTINGS_FAILURE
} from './constants'
import { fromJS } from 'immutable'

// The initial state of the App
const initialState = fromJS({
  questions: null,
  categories: null,
  fetching: null,
  error: null
})

const mapQuestionsToCategories = (categories) => {
  return categories.reduce((a, category) => {
    let { category: {name: name}, questions } = category
    a[name] = questions
    return a
  }, {})
}

const mapCategoriesToName = (categories) => categories.map(({category}) => category.name)

function settingsReducer (state = initialState, action) {
  switch (action.type) {
    case REQUEST_SETTINGS:
      return state
        .set('fetching', true)
        .set('error', false)
        .set('settings', null)
    case RECEIVE_SETTINGS_SUCCESS:
      const { settings } = action
      return state
        .set('fetching', false)
        .set('questions', mapQuestionsToCategories(settings.categories))
        .set('categories', mapCategoriesToName(settings.categories))
    case RECEIVE_SETTINGS_FAILURE:
      return state
        .set('fetching', false)
        .set('error', action.error)
    default:
      return state
  }
}

export default settingsReducer
