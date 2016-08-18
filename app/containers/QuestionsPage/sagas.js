
import { take, call, put, fork } from 'redux-saga/effects'

import { REQUEST_QUESTIONS, ADD_QUESTION } from './constants'

import {
  receiveQuestionsSuccess,
  receiveQuestionsFailure,
  addQuestionSuccess,
  addQuestionFailure
} from './actions'

import levelsSaga from '../Level/sagas'
import newLevelFormSaga from '../NewLevelForm/sagas'
import { watchDeleteQuestion } from '../Question/sagas'

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

export function * workerAddQuestion (payload) {
  const requestURL = '/api/questions'
  let requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }
  const resp = yield call(request, requestURL, requestOptions)
  if (!resp.err) {
    yield put(addQuestionSuccess(resp.data))
  } else {
    const { message } = resp.err
    yield put(addQuestionFailure({ message }))
  }
}

export function * watchAddQuestion () {
  while (true) {
    const { payload } = yield take(ADD_QUESTION)
    yield call(() => workerAddQuestion(payload))
  }
}

export function * questionsSaga () {
  yield fork(watchQuestions)
  yield fork(watchAddQuestion)
  yield fork(watchDeleteQuestion)
}

// Bootstrap sagas
export default [
  questionsSaga,
  ...levelsSaga,
  ...newLevelFormSaga
]
