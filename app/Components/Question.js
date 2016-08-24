import React, { Component } from 'react'

import { List, ListItem } from 'material-ui/List'
import Level from './Level'
import RaisedButton from 'material-ui/RaisedButton'

export class Question extends Component {

  render () {
    const { levels } = this.props
    return (
      <ListItem
        primaryText={levels[0].question}
        primaryTogglesNestedList
        nestedItems={levels.map(level => <Level key={level._id} {...level} />)}
      />
    )
  }
}

Question.propTypes = {
  // changeRoute: React.PropTypes.func
}
export default Question
