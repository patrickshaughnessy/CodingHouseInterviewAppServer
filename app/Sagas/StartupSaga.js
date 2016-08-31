import { take, put, call } from 'redux-saga/effects'
// import { push, LOCATION_CHANGE } from 'react-router-redux'
import Types from '../Actions/Types'
// import R from 'ramda'
import { getAuthToken } from '../Services/LocalStorage'
import Actions from '../Actions/Creators'

// const production = process.env.NODE_ENV === 'production'

export function * watchStartup () {
  yield take(Types.STARTUP)

  let token = yield call(getAuthToken)
  yield put(Actions.setToken(token))
}
