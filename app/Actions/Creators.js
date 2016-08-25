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

const addLevel = (level) => ({ type: Types.ADD_LEVEL, level })
const addLevelSuccess = (payload) => ({ type: Types.ADD_LEVEL_SUCCESS, ...payload })
const addLevelFailure = (payload) => ({ type: Types.ADD_LEVEL_FAILURE, ...payload })

const editLevel = (level) => ({ type: Types.EDIT_LEVEL, level })
const editLevelSuccess = (payload) => ({ type: Types.EDIT_LEVEL_SUCCESS, ...payload })
const editLevelFailure = (payload) => ({ type: Types.EDIT_LEVEL_FAILURE, ...payload })

const deleteLevel = (level) => ({ type: Types.DELETE_LEVEL, level })
const deleteLevelSuccess = (payload) => ({ type: Types.DELETE_LEVEL_SUCCESS, ...payload })
const deleteLevelFailure = (payload) => ({ type: Types.DELETE_LEVEL_FAILURE, ...payload })

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
  addLevel,
  addLevelSuccess,
  addLevelFailure,
  editLevel,
  editLevelSuccess,
  editLevelFailure,
  deleteLevel,
  deleteLevelSuccess,
  deleteLevelFailure
}
