import { take, put, call } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

import { normalize, Schema, arrayOf } from 'normalizr'

const levelSchema = new Schema('levels', { idAttribute: '_id' })

export default (api) => {
  function * worker (level) {
    const response = yield call(api.editLevel, level)

    if (response.ok) {
      const payload = normalize(response.data, { levels: arrayOf(levelSchema) })
      yield put(Actions.editLevelSuccess({ payload }))
    } else if (response.data) {
      const { status, data: {message} } = response
      yield put(Actions.editLevelFailure({ message, status }))
    } else {
      const { status, problem } = response
      yield put(Actions.editLevelFailure({ message: problem, status }))
    }
  }

  function * watcher () {
    while (true) {
      const { level } = yield take(Types.EDIT_LEVEL)
      yield call(worker, level)
    }
  }

  return {
    watcher,
    worker
  }
}
