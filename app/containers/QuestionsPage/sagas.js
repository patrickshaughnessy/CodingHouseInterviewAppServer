
import { take, call, put, fork } from 'redux-saga/effects'

import { REQUEST_QUESTIONS } from './constants'
import { receiveQuestionsSuccess, receiveQuestionsFailure } from './actions'

import levelsSaga from '../Level/sagas'
import newLevelFormSaga from '../NewLevelForm/sagas'

import request from 'utils/request'
// import { selectUser } from '../Login/selectors'

export function * workerQuestions () {
  // const user = yield select(selectUser())
  const requestURL = '/api/questions/'

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
    const { questions, categories } = resp.data
    yield put(receiveQuestionsSuccess({ questions, categories }))
  } else {
    const { message } = resp.err
    yield put(receiveQuestionsFailure({ message }))
  }
}

export function * watchQuestions () {
  while (yield take(REQUEST_QUESTIONS)) {
    yield call(workerQuestions)
  }
}

export function * questionsSaga () {
  yield fork(watchQuestions)
}

// Bootstrap sagas
export default [
  questionsSaga,
  ...levelsSaga,
  ...newLevelFormSaga
]
