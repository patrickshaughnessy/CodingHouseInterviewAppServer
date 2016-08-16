/*
 *
 * List all the features
 */
import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Helmet from 'react-helmet'

import H1 from 'components/H1'
import Question from '../Question'

import { createStructuredSelector } from 'reselect'

import {
  selectFetching,
  selectError,
  selectQuestions,
  selectQuestionsById,
  selectCategories,
  selectCategoriesById,
  selectQuestionsByCategory,
  selectViewing
} from './selectors'

import {
  requestQuestions,
  changeViewing
} from './actions'

// import styles from './styles.css'

export class QuestionsPage extends React.Component {

  componentDidMount () {
    const { onMount } = this.props
    onMount()
  }
  /**
   * Changes the route
   *
   * @param  {string} route The route we want to go to
   */
  openRoute = (route) => {
    this.props.changeRoute(route)
  };

  /**
   * Changed route to '/'
   */
  openHomePage = () => {
    this.openRoute('/')
  };

  _renderCategories = () => {
    const { categories, changeViewing } = this.props
    return categories && categories.map(category => {
      return <a key={category._id} onClick={() => changeViewing(category._id)}>{category.name}</a>
    })
  }

  _renderQuestions = () => {
    const { questionsById, questionsByCategory, viewing } = this.props
    if (!questionsById || !questionsByCategory || !viewing) return
    return questionsByCategory[viewing].map(id => {
      return <Question key={id} {...questionsById.toJS()[id]} />
    })
  }

  render () {
    return (
      <div>
        <Helmet
          title='Questions'
          meta={[
            { name: 'description', content: 'A list of available questions for interviews' }
          ]}
        />
        <H1>
          Questions
        </H1>

        {this._renderCategories()}
        {this._renderQuestions()}
      </div>
    )
  }
}
QuestionsPage.propTypes = {
  changeRoute: React.PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  questions: selectQuestions(),
  questionsById: selectQuestionsById(),
  categories: selectCategories(),
  categoriesById: selectCategoriesById(),
  questionsByCategory: selectQuestionsByCategory(),
  viewing: selectViewing(),
  fetching: selectFetching(),
  error: selectError()
})

function mapDispatchToProps (dispatch) {
  return {
    onMount: () => dispatch(requestQuestions()),
    changeViewing: (categoryID) => dispatch(changeViewing(categoryID)),
    changeRoute: (url) => dispatch(push(url)),

    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage)
