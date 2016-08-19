// A list of all actions in the system.
import { createTypes } from 'reduxsauce'

export default createTypes(`
  STARTUP

  LOGIN
  LOGIN_SUCCESS
  LOGIN_FAILURE

  LOGOUT

  REQUEST_QUESTIONS
  RECEIVE_QUESTIONS
  RECEIVE_QUESTIONS_FAILURE

  REQUEST_CATEGORIES
  RECEIVE_CATEGORIES
  RECEIVE_CATEGORIES_FAILURE
`)
