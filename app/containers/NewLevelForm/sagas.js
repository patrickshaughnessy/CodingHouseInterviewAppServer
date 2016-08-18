
import { take, call, put, fork } from 'redux-saga/effects'
import { ADD_LEVEL } from './constants'
import { addLevelSuccess, addLevelFailure } from './actions'

import request from 'utils/request'

export function * workerNewLevelForm (payload) {
  const requestURL = '/api/questions/levels'

  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }

  const resp = yield call(request, requestURL, requestOptions)

  if (!resp.err) {
    yield put(addLevelSuccess(resp.data))
  } else {
    const { message } = resp.err
    yield put(addLevelFailure({ message }))
  }
}

export function * watchNewLevelForm () {
  while (true) {
    const { payload } = yield take(ADD_LEVEL)
    yield call(() => workerNewLevelForm(payload))
  }
}

export function * newLevelFormSaga () {
  yield fork(watchNewLevelForm)
}

export default [
  newLevelFormSaga
]
