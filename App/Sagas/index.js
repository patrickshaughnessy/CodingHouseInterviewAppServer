import { fork } from 'redux-saga/effects'
import API from '../Services/Api'
import { watchStartup } from './StartupSaga'
import AuthSaga from './AuthSaga'
import QuestionsSaga from './QuestionsSaga'
import CategoriesSaga from './CategoriesSaga'

const api = API.create()

export default function * root () {
  yield fork(watchStartup)
  yield fork(AuthSaga(api).watcher)
  yield fork(QuestionsSaga(api).watcher)
  yield fork(CategoriesSaga(api).watcher)
}
