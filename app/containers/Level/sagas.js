
import { take, call, put, fork } from 'redux-saga/effects'
import { UPDATE_LEVEL } from './constants'
import { updateLevelSuccess, updateLevelFailure } from './actions'

import request from 'utils/request'

export function * workerLevels (payload) {
  const requestURL = '/api/questions/levels'

  console.log('here', payload)

  const requestOptions = {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }

  const resp = yield call(request, requestURL, requestOptions)

  if (!resp.err) {
    console.log('OK still need to fix reducer', resp.data)
    yield put(updateLevelSuccess(resp.data))
  } else {
    const { message } = resp.err
    yield put(updateLevelFailure({ message }))
  }
}

export function * watchLevels () {
  while (true) {
    const { payload } = yield take(UPDATE_LEVEL)
    yield call(() => workerLevels(payload))
  }
}

export function * levelsSaga () {
  yield fork(watchLevels)
}

export default [
  levelsSaga
]
