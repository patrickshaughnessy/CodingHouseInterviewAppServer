/**
 * The questions state selectors
 */

import { createSelector } from 'reselect'

const selectQuestionsState = () => (state) => state.get('questions')

const selectFetching = () => createSelector(
  selectQuestionsState(),
  (questionsState) => questionsState.get('fetching')
)

const selectError = () => createSelector(
  selectQuestionsState(),
  (questionsState) => questionsState.get('error')
)

const selectQuestions = () => createSelector(
  selectQuestionsState(),
  (questionsState) => questionsState.get('questions')
)

const selectCategories = () => createSelector(
  selectQuestionsState(),
  (questionsState) => questionsState.get('categories')
)

const selectQuestionsByCategory = () => createSelector(
  selectQuestionsState(),
  (questionsState) => questionsState.get('questionsByCategory')
)

const selectViewing = () => createSelector(
  selectQuestionsState(),
  (questionsState) => questionsState.get('viewing')
)

export {
  selectQuestionsState,
  selectFetching,
  selectError,
  selectQuestions,
  selectCategories,
  selectQuestionsByCategory,
  selectViewing
}
