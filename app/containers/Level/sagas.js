
import { take, call, put, fork } from 'redux-saga/effects'
import { UPDATE_LEVEL, DELETE_LEVEL } from './constants'
import { updateLevelSuccess, updateLevelFailure, deleteLevelSuccess, deleteLevelFailure } from './actions'

import request from 'utils/request'

// update level
export function * workerUpdateLevels (payload) {
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

export function * watchUpdateLevels () {
  while (true) {
    const { payload } = yield take(UPDATE_LEVEL)
    yield call(() => workerUpdateLevels(payload))
  }
}

export function * updateLevelsSaga () {
  yield fork(watchUpdateLevels)
}

// delete level
export function * workerDeleteLevels (levelID) {
  const requestURL = `/api/questions/levels/${levelID}`

  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  const resp = yield call(request, requestURL, requestOptions)

  if (!resp.err) {
    yield put(deleteLevelSuccess(resp.data))
  } else {
    const { message } = resp.err
    yield put(deleteLevelFailure({ message }))
  }
}

export function * watchDeleteLevels () {
  while (true) {
    const { levelID } = yield take(DELETE_LEVEL)
    console.log(levelID)
    yield call(() => workerDeleteLevels(levelID))
  }
}

export function * deleteLevelsSaga () {
  yield fork(watchDeleteLevels)
}

export default [
  updateLevelsSaga,
  deleteLevelsSaga
]
