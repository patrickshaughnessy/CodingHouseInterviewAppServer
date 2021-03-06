import Types from './Types'

const startup = () => ({ type: Types.STARTUP })

const setToken = (token) => ({ type: Types.SET_TOKEN, token })

const login = (credentials) => ({ type: Types.LOGIN, credentials })
const loginSuccess = (payload) => ({ type: Types.LOGIN_SUCCESS, ...payload })
const loginFailure = (payload) => ({ type: Types.LOGIN_FAILURE, ...payload })

const logout = () => ({ type: Types.LOGOUT })

const requestQuestions = () => ({ type: Types.REQUEST_QUESTIONS })
const receiveQuestions = (payload) => ({ type: Types.RECEIVE_QUESTIONS, ...payload })
const receiveQuestionsFailure = (payload) => ({ type: Types.RECEIVE_QUESTIONS_FAILURE, ...payload })

const requestSettings = (user) => ({ type: Types.REQUEST_SETTINGS, user })
const receiveSettings = (payload) => ({ type: Types.RECEIVE_SETTINGS, ...payload })
const receiveSettingsFailure = (payload) => ({ type: Types.RECEIVE_SETTINGS_FAILURE, ...payload })

const requestInterviews = (user) => ({ type: Types.REQUEST_INTERVIEWS, user })
const receiveInterviews = (payload) => ({ type: Types.RECEIVE_INTERVIEWS, ...payload })
const receiveInterviewsFailure = (payload) => ({ type: Types.RECEIVE_INTERVIEWS_FAILURE, ...payload })

const editSettings = (settings) => ({ type: Types.EDIT_SETTINGS, settings })
const editSettingsSuccess = (payload) => ({ type: Types.EDIT_SETTINGS_SUCCESS, ...payload })
const editSettingsFailure = (payload) => ({ type: Types.EDIT_SETTINGS_FAILURE, ...payload })

const changeViewing = (categoryID) => ({ type: Types.CHANGE_VIEWING, categoryID })

const addCategory = (name) => ({ type: Types.ADD_CATEGORY, name })
const addCategorySuccess = (payload) => ({ type: Types.ADD_CATEGORY_SUCCESS, ...payload })
const addCategoryFailure = (payload) => ({ type: Types.ADD_CATEGORY_FAILURE, ...payload })

const addQuestion = (question) => ({ type: Types.ADD_QUESTION, question })
const addQuestionSuccess = (payload) => ({ type: Types.ADD_QUESTION_SUCCESS, ...payload })
const addQuestionFailure = (payload) => ({ type: Types.ADD_QUESTION_FAILURE, ...payload })

const editQuestion = (question) => ({ type: Types.EDIT_QUESTION, question })
const editQuestionSuccess = (payload) => ({ type: Types.EDIT_QUESTION_SUCCESS, ...payload })
const editQuestionFailure = (payload) => ({ type: Types.EDIT_QUESTION_FAILURE, ...payload })

const deleteQuestion = (question) => ({ type: Types.DELETE_QUESTION, question })
const deleteQuestionSuccess = (payload) => ({ type: Types.DELETE_QUESTION_SUCCESS, ...payload })
const deleteQuestionFailure = (payload) => ({ type: Types.DELETE_QUESTION_FAILURE, ...payload })

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
  setToken,
  login,
  loginSuccess,
  loginFailure,
  logout,
  requestQuestions,
  receiveQuestions,
  receiveQuestionsFailure,
  requestSettings,
  receiveSettings,
  receiveSettingsFailure,
  requestInterviews,
  receiveInterviews,
  receiveInterviewsFailure,
  editSettings,
  editSettingsSuccess,
  editSettingsFailure,
  changeViewing,
  addCategory,
  addCategorySuccess,
  addCategoryFailure,
  addQuestion,
  addQuestionSuccess,
  addQuestionFailure,
  editQuestion,
  editQuestionSuccess,
  editQuestionFailure,
  deleteQuestion,
  deleteQuestionSuccess,
  deleteQuestionFailure,
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
