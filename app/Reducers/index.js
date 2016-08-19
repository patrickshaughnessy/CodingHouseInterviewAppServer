import { combineReducers, routerReducer } from 'redux-seamless-immutable'

import LoginReducer from './LoginReducer'
import UserReducer from './UserReducer'
import QuestionsReducer from './QuestionsReducer'
import CategoriesReducer from './CategoriesReducer'

export default function createReducer () {
  return combineReducers({
    routing: routerReducer,
    login: LoginReducer,
    user: UserReducer,
    questions: QuestionsReducer,
    categories: CategoriesReducer
  })
}
