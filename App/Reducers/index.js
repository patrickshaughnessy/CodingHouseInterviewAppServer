// import { combineReducers } from 'redux-immutable'

// import RouteReducer from './RouteReducer'
// import QuestionsReducer from './QuestionsReducer'

import { combineReducers, routerReducer, stateTransformer } from 'redux-seamless-immutable'


export default function createReducer () {
  return combineReducers({
    routing: routerReducer,
    // questions: QuestionsReducer
  })
}
