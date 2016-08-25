import { take, put, call, spawn } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

import { normalize, Schema, arrayOf } from 'normalizr'

const levelSchema = new Schema('levels', { idAttribute: '_id' })

export default (api) => {
  function * worker (task, question) {
    const response = yield call(api[task], question)

    if (response.ok) {
      const payload = normalize(response.data, { levels: arrayOf(levelSchema) })
      yield put(Actions[`${task}Success`]({ payload }))
    } else if (response.data) {
      const { status, data: {message} } = response
      yield put(Actions[`${task}Failure`]({ message, status }))
    } else {
      const { status, problem } = response
      yield put(Actions[`${task}Failure`]({ message: problem, status }))
    }
  }

  function * watcher () {
    yield spawn(function * () {
      while (true) {
        const { question } = yield take(Types.ADD_QUESTION)
        yield call(worker, 'addQuestion', question)
      }
    })

    yield spawn(function * () {
      while (true) {
        const { question } = yield take(Types.EDIT_QUESTION)
        yield call(worker, 'editQuestion', question)
      }
    })

    yield spawn(function * () {
      while (true) {
        const { question } = yield take(Types.DELETE_QUESTION)
        yield call(worker, 'deleteQuestion', question)
      }
    })
  }

  return {
    watcher,
    worker
  }
}
