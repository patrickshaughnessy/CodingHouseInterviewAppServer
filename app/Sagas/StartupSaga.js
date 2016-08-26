import { take, put, select } from 'redux-saga/effects'
import { push, LOCATION_CHANGE } from 'react-router-redux'
import Types from '../Actions/Types'
import R from 'ramda'

// const production = process.env.NODE_ENV === 'production'

export function * watchStartup () {
  yield take(Types.STARTUP)

  // Uncomment to check for auth prior to routing
  // Not perfect b/c routing is async so check in pages as well
  while (true) {
    const { payload: pathname } = yield take(LOCATION_CHANGE)
    const user = yield select(state => state.user.info)
    if (R.isNil(user) && pathname !== '/login') {
      yield put(push('/login'))
    }
  }
}
