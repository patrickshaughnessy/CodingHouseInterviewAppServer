import { take, put, call } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

// attempts to login
export default (api) => {
  function * worker (category) {
    const response = yield call(api.addCategory, category)

    if (response.ok) {
      const categories = response.data
      yield put(Actions.addCategorySuccess({ categories }))
    } else if (response.data) {
      const { status, data: {message} } = response
      yield put(Actions.addCategoryFailure({ message, status }))
    } else {
      const { status, problem } = response
      yield put(Actions.addCategoryFailure({ message: problem, status }))
    }
  }

  function * watcher () {
    while (true) {
      const { category } = yield take(Types.ADD_CATEGORY)
      yield call(worker, category)
    }
  }

  return {
    watcher,
    worker
  }
}
