/**
 * The settings state selectors
 */

import { createSelector } from 'reselect'

const selectSettingsState = () => (state) => state.get('settings')

const selectFetching = () => createSelector(
  selectSettingsState(),
  (settingsState) => settingsState.get('fetching')
)

const selectError = () => createSelector(
  selectSettingsState(),
  (settingsState) => settingsState.get('error')
)

const selectSettings = () => createSelector(
  selectSettingsState(),
  (settingsState) => settingsState.get('settings')
)

export {
  selectSettingsState,
  selectFetching,
  selectError,
  selectSettings
}
