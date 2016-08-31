import { take, put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import Types from '../Actions/Types'
import Actions from '../Actions/Creators'
import { getAuthToken, setAuthToken, removeAuthToken } from '../Services/LocalStorage'

// attempts to login
export default (api) => {
  function * authorize (credentials) {
    const response = yield call(api.login, credentials)
    if (response.ok) {
      let { user, token } = response.data
      user = JSON.parse(user)
      yield call(setAuthToken, token)
      yield put(Actions.loginSuccess({ user, token }))
      yield put(push('/settings'))
      return token
    } else if (response.data) {
      const { status, data: {message} } = response
      yield put(Actions.loginFailure({ message, status }))
      return null
    } else {
      const { status, problem } = response
      yield put(Actions.loginFailure({ message: problem, status }))
      return null
    }
  }

  function * authenticate (token) {
    const response = yield call(api.authenticate, token)
    if (response.ok) {
      let { user, token } = response.data
      user = JSON.parse(user)
      yield call(setAuthToken, token)
      yield put(Actions.loginSuccess({ user, token }))
      return false
    } else if (response.data) {
      const { status, data: {message} } = response
      yield put(Actions.loginFailure({ message, status }))
      return true
    } else {
      const { status, problem } = response
      yield put(Actions.loginFailure({ message: problem, status }))
      return true
    }
  }

  function * logout (error) {
    yield call(removeAuthToken)
    yield put(Actions.logout(error))
  }

  function * init () {
    let token = yield call(getAuthToken)
    let expired
    if (token) {
      expired = yield call(authenticate, token)
    }
    if (expired || !token) {
      token = null
      while (true) {
        while (!token) {
          const { credentials } = yield take(Types.LOGIN)
          token = yield call(authorize, credentials)
        }

        yield take(Types.LOGOUT)
        yield call(logout)
      }
    } else {
      while (true) {
        yield take(Types.LOGOUT)
        yield call(logout)

        while (!token) {
          const { credentials } = yield take(Types.LOGIN)
          token = yield call(authorize, credentials)
        }
      }
    }
  }

  return {
    init,
    authorize,
    logout
  }
}
