import Types from './Types'

const startup = () => ({ type: Types.STARTUP })

const login = (email, password) => ({ type: Types.LOGIN, email, password })
const loginSuccess = (payload) => ({ type: Types.LOGIN_SUCCESS, ...payload })
const loginFailure = (payload) => ({ type: Types.LOGIN_FAILURE, ...payload })

const logout = () => ({ type: Types.LOGOUT })

const requestQuestions = () => ({ type: Types.REQUEST_QUESTIONS })
const receiveQuestions = (payload) => ({ type: Types.RECEIVE_QUESTIONS, ...payload })
const receiveQuestionsFailure = (payload) => ({ type: Types.RECEIVE_QUESTIONS_FAILURE, ...payload })

const requestCategories = () => ({ type: Types.REQUEST_CATEGORIES })
const receiveCategories = (categories) => ({ type: Types.RECEIVE_CATEGORIES, ...categories })
const receiveCategoriesFailure = (payload) => ({ type: Types.RECEIVE_CATEGORIES_FAILURE, ...payload })

const changeViewing = (categoryID) => ({ type: Types.CHANGE_VIEWING, categoryID })

const editLevel = (level) => ({ type: Types.EDIT_LEVEL, level })
const editLevelSuccess = (payload) => ({ type: Types.EDIT_LEVEL_SUCCESS, ...payload })
const editLevelFailure = (payload) => ({ type: Types.EDIT_LEVEL_FAILURE, ...payload })

/**
 Makes available all the action creators we've created.
 */
export default {
  startup,
  login,
  loginSuccess,
  loginFailure,
  logout,
  requestQuestions,
  receiveQuestions,
  receiveQuestionsFailure,
  requestCategories,
  receiveCategories,
  receiveCategoriesFailure,
  changeViewing,
  editLevel,
  editLevelSuccess,
  editLevelFailure
}
