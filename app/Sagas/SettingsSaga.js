import { take, put, call, spawn, select } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

import { normalize, Schema, arrayOf } from 'normalizr'

const question = new Schema('questions', { idAttribute: '_id' })
const category = new Schema('categories', { idAttribute: '_id' })

// attempts to login
export default (api) => {
  function * worker (user) {
    const response = yield call(api.getSettings, user)
    if (response.ok && typeof response.data === 'object') {
      const payload = normalize(response.data, {categories: arrayOf({
        category: category,
        questions: arrayOf(question)
      })})
      yield put(Actions.receiveSettings({ payload }))
    } else if (response.data) {
      const { status, data: {message} } = response
      yield put(Actions.receiveSettingsFailure({ message, status }))
    } else {
      const { status, problem } = response
      yield put(Actions.receiveSettingsFailure({ message: problem, status }))
    }
  }

  function * edit (settings) {
    const user = yield select(state => state.user.info)
    const response = yield call(api.editSettings, user, settings)
    if (response.ok && typeof response.data === 'object') {
      const payload = normalize(response.data, {categories: arrayOf({
        category: category,
        questions: arrayOf(question)
      })})
      yield put(Actions.editSettingsSuccess({ payload }))
    } else if (response.data) {
      const { status, data: {message} } = response
      yield put(Actions.editSettingsFailure({ message, status }))
    } else {
      const { status, problem } = response
      yield put(Actions.editSettingsFailure({ message: problem, status }))
    }
  }

  function * watcher () {
    yield spawn(function * () {
      while (true) {
        const { user } = yield take(Types.REQUEST_SETTINGS)
        yield call(worker, user)
      }
    })
    yield spawn(function * () {
      while (true) {
        const { settings } = yield take(Types.EDIT_SETTINGS)
        yield call(edit, settings)
      }
    })
  }

  return {
    watcher,
    worker
  }
}
