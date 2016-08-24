import React, { Component } from 'react'

import { List, ListItem } from 'material-ui/List'
import Question from './Question'

export class QuestionsList extends Component {

  render () {
    const { category, questions } = this.props
    console.log(questions)
    return (
      <List>
        {questions && questions.map(question => <Question key={question._id} {...question} />)}
      </List>
    )
  }
}
QuestionsList.propTypes = {
  // changeRoute: React.PropTypes.func
}
export default QuestionsList
