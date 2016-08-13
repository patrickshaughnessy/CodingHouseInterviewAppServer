/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_EMAIL = 'boilerplate/Home/CHANGE_EMAIL'
export const CHANGE_PASSWORD = 'boilerplate/Home/CHANGE_PASSWORD'
export const LOGIN_ATTEMPT = 'boilerplate/Home/LOGIN_ATTEMPT'
export const LOGIN_SUCCESS = 'boilerplate/Home/LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'boilerplate/Home/LOGIN_FAILURE'
