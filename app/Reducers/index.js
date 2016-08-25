import { combineReducers, routerReducer } from 'redux-seamless-immutable'

import LoginReducer from './LoginReducer'
import UserReducer from './UserReducer'
import QuestionsReducer from './QuestionsReducer'
import CategoriesReducer from './CategoriesReducer'
import LevelsReducer from './LevelsReducer'
import ControlReducer from './ControlReducer'

export default function createReducer () {
  return combineReducers({
    routing: routerReducer,
    login: LoginReducer,
    user: UserReducer,
    questions: QuestionsReducer,
    categories: CategoriesReducer,
    levels: LevelsReducer,
    control: ControlReducer
  })
}
