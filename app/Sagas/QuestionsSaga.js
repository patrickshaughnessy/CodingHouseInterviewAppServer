import { take, put, call } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

import { normalize, Schema, arrayOf } from 'normalizr'

const question = new Schema('questions', { idAttribute: '_id' })
const level = new Schema('levels', { idAttribute: '_id' })
const category = new Schema('categories', { idAttribute: '_id' })

question.define({
  levels: arrayOf(level),
  category: category
})

// attempts to login
export default (api) => {
  function * worker () {
    const response = yield call(api.getQuestions)

    if (response.ok) {
      const payload = normalize(response.data, {questions: arrayOf(question), categories: arrayOf(category)})
      yield put(Actions.receiveQuestions({ payload }))
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
