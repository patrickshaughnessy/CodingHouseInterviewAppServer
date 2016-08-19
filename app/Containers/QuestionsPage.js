import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import Actions from '../Actions/Creators'

import { Tabs, Tab } from 'material-ui/Tabs'

export class QuestionsPage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      // addingQuestion: false,
      // question: '',
      // type: 'INPUT_BOX',
      // category: ''
    }
  }

  componentWillMount () {
    // const { user, changeRoute } = this.props
    // if (!user) {
    //   changeRoute('/login')
    // }
  }

  componentDidMount () {
    const { requestQuestions, requestCategories } = this.props
    requestQuestions()
    requestCategories()
  }

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
    const { categories } = this.props
    return categories.map(category => {
      return (
        <Tab
          key={category._id}
          label={category.name}>
          Questions Content
        </Tab>
      )
    })

    // const { categories, changeViewing, viewing } = this.props
    // return categories && categories.map((category, i) => {
    //   if (category._id === viewing) {
    //     return (
    //       <span key={category._id}>
    //         {category.name}
    //         {i !== categories.length - 1 ? <span> /</span> : null}
    //       </span>
    //     )
    //   } else {
    //     return (
    //       <span key={category._id}>
    //         <a onClick={() => changeViewing(category._id)}>
    //           {category.name}
    //           {i !== categories.length - 1 ? <span> /</span> : null}
    //         </a>
    //       </span>
    //     )
    //   }
    // })
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
    // const { addingQuestion } = this.state
    // const { viewing } = this.props
    // let currentCategory = this._transformCategoryName(viewing)
    return (
      <div>
        <Helmet
          title='Questions'
          meta={[
            { name: 'description', content: 'A list of available questions for interviews' }
          ]}
        />
        <h1>Questions</h1>
        <Tabs>
          {this._renderCategories()}
        </Tabs>
        {/* <div className={styles.categorySection}>
          {this._renderCategories()}
          </div>
          <H1>
          {currentCategory} Questions
          </H1>
          {this._renderQuestions()}
          <button onClick={this._addQuestion}>{addingQuestion ? 'Submit' : 'Add Question'}</button>
        {addingQuestion ? this._renderNewQuestionForm() : null} */}

      </div>
    )
  }
}
QuestionsPage.propTypes = {
  // changeRoute: React.PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    user: state.user.info,
    categories: state.categories.all
  }
  // questions: selectQuestions(),
  // questionsById: selectQuestionsById(),
  // categories: selectCategories(),
  // categoriesById: selectCategoriesById(),
  // questionsByCategory: selectQuestionsByCategory(),
  // viewing: selectViewing(),
  // fetching: selectFetching(),
  // error: selectError()
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestQuestions: () => dispatch(Actions.requestQuestions()),
    requestCategories: () => dispatch(Actions.requestCategories()),
    // changeViewing: (categoryID) => dispatch(changeViewing(categoryID)),
    changeRoute: (url) => dispatch(push(url)),
    // addQuestion: (payload) => dispatch(addQuestion(payload)),
    // addCategory: (category) => dispatch(addCategory(category)),
    // dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage)
