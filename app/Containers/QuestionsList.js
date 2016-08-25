import React, { Component } from 'react'
import { connect } from 'react-redux'

import { List } from 'material-ui/List'

import Question from './Question'
// import NewQuestionForm from './NewQuestionForm'

export class QuestionsList extends Component {

  _filterViewing = () => {
    const { questions, questionsById, viewing } = this.props
    return questions.filter(question => questionsById[question].category === viewing)
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
    questions: state.questions.all,
    questionsById: state.questions.byId,
    viewing: state.control.viewing || state.categories.all[0]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // changeViewing: (categoryID) => dispatch(Actions.changeViewing(categoryID)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList)
