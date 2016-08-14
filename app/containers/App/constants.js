/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const REQUEST_SETTINGS = 'InterviewAppWeb/App/REQUEST_SETTINGS'
export const RECEIVE_SETTINGS_SUCCESS = 'InterviewAppWeb/App/RECEIVE_SETTINGS_SUCCESS'
export const RECEIVE_SETTINGS_FAILURE = 'InterviewAppWeb/App/RECEIVE_SETTINGS_FAILURE'
