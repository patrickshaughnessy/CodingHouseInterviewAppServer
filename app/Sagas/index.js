import { fork } from 'redux-saga/effects'
import API from '../Services/Api'
import { watchStartup } from './StartupSaga'
import AuthSaga from './AuthSaga'
import QuestionsSaga from './QuestionsSaga'
import CategoriesSaga from './CategoriesSaga'
import LevelSaga from './LevelSaga'
import QuestionSaga from './QuestionSaga'
import SettingsSaga from './SettingsSaga'

const api = API.create()

export default function * root () {
  yield fork(watchStartup)
  yield fork(AuthSaga(api).watcher)
  yield fork(QuestionsSaga(api).watcher)
  yield fork(CategoriesSaga(api).watcher)
  yield fork(LevelSaga(api).watcher)
  yield fork(QuestionSaga(api).watcher)
  yield fork(SettingsSaga(api).watcher)
}
