import React, { Component } from 'react'
import { connect } from 'react-redux'

import { List, ListItem } from 'material-ui/List'

import Question from './Question'
// import NewQuestionForm from './NewQuestionForm'

export class QuestionsList extends Component {

  _filterViewing = () => {
    const { allQuestions, questionsById, viewing } = this.props
    return allQuestions.filter(question => questionsById[question].category === viewing)
  }

  render () {
    const { questionsById } = this.props
    return (
      <List>
        {this._filterViewing().map(question => <Question key={question} {...questionsById[question]} />)}
      </List>
    )
  }
}
QuestionsList.propTypes = {
  // changeRoute: React.PropTypes.func
}
const mapStateToProps = (state) => {
  return {
    allQuestions: state.questions.allQuestions,
    questionsById: state.questions.questions,
    viewing: state.questions.viewing || state.questions.allCategories[0]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // changeViewing: (categoryID) => dispatch(Actions.changeViewing(categoryID)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList)
