import React, { Component } from 'react'
import { connect } from 'react-redux'

import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

import Level from '../Components/Level'

export class Question extends Component {

  render () {
    const { levels, levelsById, _id } = this.props
    return (
      <ListItem
        primaryText={levelsById[levels[0]].question}
        primaryTogglesNestedList
        nestedItems={levels.map(level => <Level key={level} {...levelsById[level]} />)}
      />
    )
  }
}

Question.propTypes = {
  // changeRoute: React.PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    levelsById: state.questions.levels
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // changeViewing: (categoryID) => dispatch(Actions.changeViewing(categoryID)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
