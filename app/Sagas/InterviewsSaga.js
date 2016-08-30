import { take, put, call } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

import { normalize, Schema, arrayOf } from 'normalizr'

const interview = new Schema('interviews', { idAttribute: '_id' })

export default (api) => {
  function * worker () {
    const response = yield call(api.getInterviews)
    console.log(response)
    if (response.ok && typeof response.data === 'object') {
      const payload = normalize(response.data, arrayOf(interview))
      yield put(Actions.receiveInterviews({ payload }))
    } else if (response.data) {
      const { status, data: {message} } = response
      yield put(Actions.receiveInterviewsFailure({ message, status }))
    } else {
      const { status, problem } = response
      yield put(Actions.receiveInterviewsFailure({ message: problem, status }))
    }
  }

  function * watcher () {
    while (true) {
      yield take(Types.REQUEST_INTERVIEWS)
      yield call(worker)
    }
  }

  return {
    watcher,
    worker
  }
}
