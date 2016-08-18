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
  changeViewing,
  addQuestion,
  addCategory
} from './actions'

import styles from './styles.css'

export class QuestionsPage extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      addingQuestion: false,
      question: '',
      type: 'INPUT_BOX',
      category: ''
    }
  }

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

  _addQuestion = () => {
    const { addingQuestion, question, type } = this.state
    if (addingQuestion) {
      const { addQuestion, viewing } = this.props
      const payload = {
        category: viewing,
        levels: [
          {
            type,
            question
          }
        ]
      }
      addQuestion(payload)
    }
    this.setState({
      addingQuestion: !addingQuestion,
      question: '',
      type: 'INPUT_BOX'
    })
  }

  _addCategory = () => {
    const { addingCategory, category } = this.state
    if (addingCategory) {
      const { addCategory } = this.props
      addCategory({ name: category })
    }
    this.setState({ addingCategory: !addingCategory })
  }

  _transformCategoryName = (id) => {
    const { categoriesById } = this.props
    if (categoriesById && categoriesById[id]) {
      const category = categoriesById[id]
      return category.name.slice(0, 1).toUpperCase() + category.name.slice(1)
    } else {
      return null
    }
  }

  _renderCategories = () => {
    const { categories, changeViewing, viewing } = this.props
    return categories && categories.map((category, i) => {
      if (category._id === viewing) {
        return (
          <span key={category._id}>
            {category.name}
            {i !== categories.length - 1 ? <span> /</span> : null}
          </span>
        )
      } else {
        return (
          <span key={category._id}>
            <a onClick={() => changeViewing(category._id)}>
              {category.name}
              {i !== categories.length - 1 ? <span> /</span> : null}
            </a>
          </span>
        )
      }
    })
  }

  _renderQuestions = () => {
    const { questionsById, questionsByCategory, viewing } = this.props
    if (!questionsById || !viewing || !questionsByCategory || !questionsByCategory[viewing]) return
    return questionsByCategory[viewing].map(id => {
      return <Question key={id} {...questionsById.toJS()[id]} />
    })
  }

  _renderNewQuestionForm = () => {
    const { question, type } = this.state
    return (
      <div>
        <input
          type='text'
          value={question}
          onChange={(e) => this.setState({ question: e.target.value })}
        />
        <select value={type} onChange={(e) => this.setState({ type: e.target.value })}>
          <option value='INPUT_BOX'>INPUT_BOX</option>
          <option value='CHECKBOX'>CHECKBOX</option>
          <option value='RADIO'>RADIO</option>
          <option value='SLIDER'>SLIDER</option>
        </select>
      </div>
    )
  }

  render () {
    const { addingQuestion } = this.state
    const { viewing } = this.props
    let currentCategory = this._transformCategoryName(viewing)
    return (
      <div>
        <Helmet
          title='Questions'
          meta={[
            { name: 'description', content: 'A list of available questions for interviews' }
          ]}
        />
        <div className={styles.categorySection}>
          {this._renderCategories()}
        </div>
        <H1>
          {currentCategory} Questions
        </H1>
        {this._renderQuestions()}
        <button onClick={this._addQuestion}>{addingQuestion ? 'Submit' : 'Add Question'}</button>
        {addingQuestion ? this._renderNewQuestionForm() : null}

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
    addQuestion: (payload) => dispatch(addQuestion(payload)),
    addCategory: (category) => dispatch(addCategory(category)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage)
