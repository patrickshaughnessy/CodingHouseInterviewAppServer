import { take, put, call } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

export default (api) => {
  function * worker (name) {
    const response = yield call(api.addCategory, name)

    if (response.ok) {
      const category = response.data
      yield put(Actions.addCategorySuccess({ category }))
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
      const { name } = yield take(Types.ADD_CATEGORY)
      yield call(worker, name)
    }
  }

  return {
    watcher,
    worker
  }
}
