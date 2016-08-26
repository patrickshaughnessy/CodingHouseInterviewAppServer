import { take, put, call } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

import { normalize, Schema, arrayOf } from 'normalizr'

const question = new Schema('questions', { idAttribute: '_id' })
const category = new Schema('categories', { idAttribute: '_id' })

// attempts to login
export default (api) => {
  function * worker (user) {
    const response = yield call(api.getSettings, user)
    console.log(response)
    if (response.ok && typeof response.data === 'object') {
      const payload = normalize(response.data, {categories: arrayOf({
        category: category,
        questions: arrayOf(question)
      })})
      console.log(payload)
      yield put(Actions.receiveSettings({ payload: response.data }))
    } else if (response.data) {
      const { status, data: {message} } = response
      yield put(Actions.receiveSettingsFailure({ message, status }))
    } else {
      const { status, problem } = response
      yield put(Actions.receiveSettingsFailure({ message: problem, status }))
    }
  }

  function * watcher () {
    while (true) {
      const { user } = yield take(Types.REQUEST_SETTINGS)
      console.log(user)
      yield call(worker, user)
    }
  }

  return {
    watcher,
    worker
  }
}
