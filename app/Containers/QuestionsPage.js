import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import Actions from '../Actions/Creators'

import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'

import CategorySelection from '../Components/CategorySelection'
import QuestionsList from '../Components/QuestionsList'

export class QuestionsPage extends Component {

  // constructor (props) {
  //   super(props)
  // }

  componentWillMount () {
    // const { user, changeRoute } = this.props
    // if (!user) {
    //   changeRoute('/login')
    // }
  }

  componentDidMount () {
    const { requestQuestions, requestCategories } = this.props
    requestCategories()
    requestQuestions()
  }

  _mapQuestionsToCategory = () => {
    const { questions, viewing } = this.props
    if (!questions || !viewing ) return
    return questions.filter(question => question.category._id === viewing)
  }

  render () {
    const { questions, categories, changeViewing, viewing } = this.props
    return (
      <div>
        <Helmet
          title='Questions'
          meta={[
            { name: 'description', content: 'A list of available questions for interviews' }
          ]}
        />
        <CategorySelection
          categories={categories}
          viewing={viewing}
          changeViewing={changeViewing}
        />
        <QuestionsList
          questions={this._mapQuestionsToCategory()}
        />
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
    categories: state.categories.all,
    categoriesById: state.categories.categoriesById,
    questions: state.questions.all,
    questionsById: state.questions.questionsById,
    viewing: state.categories.viewing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestQuestions: () => dispatch(Actions.requestQuestions()),
    requestCategories: () => dispatch(Actions.requestCategories()),
    changeViewing: (categoryID) => dispatch(Actions.changeViewing(categoryID)),
    changeRoute: (url) => dispatch(push(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage)
