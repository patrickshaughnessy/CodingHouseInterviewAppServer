
import { take, call, put, fork } from 'redux-saga/effects'
// import { LOCATION_CHANGE } from 'react-router-redux'
import { REQUEST_SETTINGS } from './constants'
import { receiveSettingsSuccess, receiveSettingsFailure } from './actions'

import request from 'utils/request'
// import { selectUser } from '../Login/selectors'

export function * workerSettings () {
  // const user = yield select(selectUser())
  // const requestURL = `/api/settings/${user.get('_id')}`
  const requestURL = '/api/settings/576db18b6594440300261e16'

  // Call our request helper (see 'utils/request')
  let requestOptions = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  const resp = yield call(request, requestURL, requestOptions)

  if (!resp.err) {
    yield put(receiveSettingsSuccess({ settings: resp.data }))
  } else {
    const { message } = resp.err
    yield put(receiveSettingsFailure({ message }))
  }
}

export function * watchSettings () {
  while (yield take(REQUEST_SETTINGS)) {
    yield call(workerSettings)
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function * settingsSaga () {
  // // Fork watcher so we can continue execution
  // const watcher = yield fork(watch)
  yield fork(watchSettings)

  // // Suspend execution until location changes
  // yield take(LOCATION_CHANGE)
  // yield cancel(watcher)
}

// Bootstrap sagas
export default [
  settingsSaga
]
