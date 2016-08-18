
import { take, call, put, fork } from 'redux-saga/effects'
import { DELETE_QUESTION } from './constants'
import { deleteQuestionSuccess, deleteQuestionFailure } from './actions'

import request from 'utils/request'

export function * workerDeleteQuestion (id) {
  const requestURL = `/api/questions/${id}`

  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  const resp = yield call(request, requestURL, requestOptions)

  if (!resp.err) {
    yield put(deleteQuestionSuccess(resp.data))
  } else {
    const { message } = resp.err
    yield put(deleteQuestionFailure({ message }))
  }
}

export function * watchDeleteQuestion () {
  while (true) {
    const { id } = yield take(DELETE_QUESTION)
    yield call(() => workerDeleteQuestion(id))
  }
}

export function * deleteQuestionSaga () {
  yield fork(watchDeleteQuestion)
}

export default [
  deleteQuestionSaga
]
