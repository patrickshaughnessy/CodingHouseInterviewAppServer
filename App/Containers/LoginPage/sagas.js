/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, fork } from 'redux-saga/effects'
// import { LOCATION_CHANGE } from 'react-router-redux'
import { LOGIN_ATTEMPT } from './constants'
import { loginSuccess, loginFailure } from './actions'

import request from 'utils/request'
import { selectEmail, selectPassword } from './selectors'

/**
 * Github repos request/response handler
 */
export function * login () {
  const email = yield select(selectEmail())
  const password = yield select(selectPassword())
  const requestURL = '/auth'

  // Call our request helper (see 'utils/request')
  let requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  }
  const resp = yield call(request, requestURL, requestOptions)

  if (!resp.err) {
    const { user, token } = resp.data
    yield put(loginSuccess({user: JSON.parse(user), token: token}))
  } else {
    const { message } = resp.err
    yield put(loginFailure({ message }))
  }
}

/**
 * Watches for LOAD_REPOS action and calls handler
 */
export function * watchLogin () {
  while (yield take(LOGIN_ATTEMPT)) {
    yield call(login)
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function * loginSaga () {
  // Fork watcher so we can continue execution
  yield fork(watchLogin)

  // Suspend execution until location changes
  // yield take(LOCATION_CHANGE)
  // yield cancel(watcher)
}

// Bootstrap sagas
export default [
  loginSaga
]
