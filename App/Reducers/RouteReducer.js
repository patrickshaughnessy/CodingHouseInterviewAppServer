import Immutable from 'immutable'
import { LOCATION_CHANGE } from 'react-router-redux'
import { createReducer } from 'reduxsauce'

// Initial routing state
export const INITIAL_STATE = Immutable.fromJS({
  locationBeforeTransitions: null
})

const handleLocationChange = (state, action) =>
  state.merge({ locationBeforeTransitions: action.payload })

// function routeReducer (state = , action) {
//   switch (action.type) {
//     /* istanbul ignore next */
//     case LOCATION_CHANGE:
//       return state.merge({
//         locationBeforeTransitions: action.payload
//       })
//     default:
//       return state
//   }
// }

const ACTION_HANDLERS = {
  [LOCATION_CHANGE]: handleLocationChange
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
