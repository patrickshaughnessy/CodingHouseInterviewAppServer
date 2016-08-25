import React, { Component } from 'react'
import { connect } from 'react-redux'

import Actions from '../Actions/Creators'

import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'

export class CategorySelection extends Component {

  render () {
    const { categories, categoriesById, viewing, changeViewing } = this.props
    return (
      <Paper>
        <span>View questions for : </span>
        <DropDownMenu
          value={viewing}
          onChange={(e, i, val) => changeViewing(val)}
        >
          {categories && categories.map(category => {
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
    categories: state.categories.all,
    categoriesById: state.categories.byId,
    viewing: state.control.viewing || state.categories.all[0]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeViewing: (categoryID) => dispatch(Actions.changeViewing(categoryID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelection)
