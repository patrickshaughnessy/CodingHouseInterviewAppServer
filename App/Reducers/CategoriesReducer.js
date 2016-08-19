import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  all: [],
  categoriesById: {}
})

const mapCategoriesToIds = (categories) => {
  return categories.reduce((a, category) => {
    a[category._id] = category
    return a
  }, {})
}

const receiveCategories = (state, action) => {
  const { categories } = action
  return state.merge({
    all: categories,
    categoriesById: mapCategoriesToIds(categories)
  })
}

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.RECEIVE_CATEGORIES]: receiveCategories
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
