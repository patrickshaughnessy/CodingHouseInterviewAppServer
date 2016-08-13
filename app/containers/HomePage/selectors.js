/**
 * Homepage selectors
 */

import { createSelector } from 'reselect'

const selectHome = () => (state) => state.get('home')

const selectEmail = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('email')
)

const selectPassword = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('password')
)

const selectAttempting = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('attempting')
)

const selectUser = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('user')
)

const selectError = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('error')
)

export {
  selectHome,
  selectEmail,
  selectPassword,
  selectAttempting,
  selectUser,
  selectError
}
