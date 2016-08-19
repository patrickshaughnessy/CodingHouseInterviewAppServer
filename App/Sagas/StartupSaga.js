import { take, select, put } from 'redux-saga/effects'
import { push, LOCATION_CHANGE } from 'react-router-redux'
import Types from '../Actions/Types'
import R from 'ramda'

export function * watchStartup () {
  yield take(Types.STARTUP)

  // // Uncomment to check for auth prior to routing
  // // Not perfect b/c routing is async so check in components as well
  // while (true) {
  //   const { payload: pathname } = yield take(LOCATION_CHANGE)
  //   const user = yield select(state => state.user.info)
  //
  //   if (R.isNil(user) && pathname !== '/login') {
  //     if (R.isNil(user)) {
  //       yield put(push('/login'))
  //     }
  //   }
  // }
}
