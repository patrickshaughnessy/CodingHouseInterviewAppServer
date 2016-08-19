import { take, put, call } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

// attempts to login
export default (api) => {
  function * worker () {
    const response = yield call(api.getQuestions)

    if (response.ok) {
      const { questions } = response.data
      yield put(Actions.receiveQuestions({ questions }))
    } else if (response.data) {
      const { status, data: {message} } = response
      yield put(Actions.receiveQuestionsFailure({ message, status }))
    } else {
      const { status, problem } = response
      yield put(Actions.receiveQuestionsFailure({ message: problem, status }))
    }
  }

  function * watcher () {
    while (true) {
      yield take(Types.REQUEST_QUESTIONS)
      yield call(worker)
    }
  }

  return {
    watcher,
    worker
  }
}
