import React, { Component } from 'react'
import { connect } from 'react-redux'

import Actions from '../Actions/Creators'

import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'

export class CategorySelection extends Component {

  render () {
    const { allCategories, categoriesById, viewing, changeViewing } = this.props
    return (
      <Paper>
        <span>View questions for : </span>
        <DropDownMenu
          value={viewing}
          onChange={(e, i, val) => changeViewing(val)}
        >
          {allCategories && allCategories.map(category => {
            return (
              <MenuItem
                key={category}
                primaryText={categoriesById[category].name}
                value={category}
              />
            )
          })}
        </DropDownMenu>
      </Paper>
    )
  }
}
CategorySelection.propTypes = {
  // changeRoute: React.PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    allCategories: state.questions.allCategories,
    categoriesById: state.questions.categories,
    viewing: state.questions.viewing || state.questions.allCategories[0]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeViewing: (categoryID) => dispatch(Actions.changeViewing(categoryID)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelection)
