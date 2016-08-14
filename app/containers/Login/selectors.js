/**
 * Loginpage selectors
 */

import { createSelector } from 'reselect'

const selectLogin = () => (state) => state.get('login')

const selectEmail = () => createSelector(
  selectLogin(),
  (loginState) => loginState.get('email')
)

const selectPassword = () => createSelector(
  selectLogin(),
  (loginState) => loginState.get('password')
)

const selectAttempting = () => createSelector(
  selectLogin(),
  (loginState) => loginState.get('attempting')
)

const selectUser = () => createSelector(
  selectLogin(),
  (loginState) => loginState.get('user')
)

const selectToken = () => createSelector(
  selectLogin(),
  (loginState) => loginState.get('token')
)

const selectError = () => createSelector(
  selectLogin(),
  (loginState) => loginState.get('error')
)

export {
  selectLogin,
  selectEmail,
  selectPassword,
  selectAttempting,
  selectUser,
  selectToken,
  selectError
}
