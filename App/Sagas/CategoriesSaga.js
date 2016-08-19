import { take, put, call } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

// attempts to login
export default (api) => {
  function * worker () {
    const response = yield call(api.getCategories)

    if (response.ok) {
      const categories = response.data
      yield put(Actions.receiveCategories({ categories }))
    } else if (response.data) {
      const { status, data: {message} } = response
      yield put(Actions.receiveCategoriesFailure({ message, status }))
    } else {
      const { status, problem } = response
      yield put(Actions.receiveCategoriesFailure({ message: problem, status }))
    }
  }

  function * watcher () {
    while (true) {
      yield take(Types.REQUEST_CATEGORIES)
      yield call(worker)
    }
  }

  return {
    watcher,
    worker
  }
}
