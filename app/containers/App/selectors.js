/**
 * The global state selectors
 */

import { createSelector } from 'reselect'

const selectGlobal = () => (state) => state.get('global')

const selectFetching = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('fetching')
)

const selectError = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('error')
)

const selectSettings = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('settings')
)

const selectLocationState = () => {
  let prevRoutingState
  let prevRoutingStateJS

  return (state) => {
    const routingState = state.get('route') // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState
      prevRoutingStateJS = routingState.toJS()
    }

    return prevRoutingStateJS
  }
}

export {
  selectGlobal,
  selectFetching,
  selectError,
  selectSettings,
  selectLocationState
}
