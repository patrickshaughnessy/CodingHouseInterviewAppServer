import React, { Component } from 'react'
import { connect } from 'react-redux'

import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

import Level from '../Components/Level'
import AddLevel from '../Components/AddLevel'

export class Question extends Component {

  render () {
    const { levels, levelsById, _id } = this.props
    return (
      <ListItem
        primaryText={levelsById[levels[0]].question}
        primaryTogglesNestedList
        nestedItems={levels.map(level => <Level key={level} {...levelsById[level]} />).concat(<AddLevel key={_id + 'ADD'} questionID={_id} />)}
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
