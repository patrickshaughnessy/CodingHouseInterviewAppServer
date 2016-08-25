import React, { Component } from 'react'
import { connect } from 'react-redux'

import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

import Level from '../Components/Level'
import AddLevel from '../Components/AddLevel'
import DeleteQuestion from '../Components/DeleteQuestion'

export class Question extends Component {
  render () {
    const { levels, levelsById, _id } = this.props
    const nestedLevels = levels.map(level => <Level key={level} {...levelsById[level]} />)
    const addLevelButton = <AddLevel key={_id + 'ADD'} questionID={_id} />
    const deleteQuestionButton = <DeleteQuestion key={_id + 'DELETE'} questionID={_id} />
      return (
      <ListItem
        primaryText={levelsById[levels[0]].question}
        primaryTogglesNestedList
        nestedItems={nestedLevels.concat(addLevelButton, deleteQuestionButton)}
      />
    )
  }
}

Question.propTypes = {
  // changeRoute: React.PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    levelsById: state.levels.byId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // changeViewing: (categoryID) => dispatch(Actions.changeViewing(categoryID)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
