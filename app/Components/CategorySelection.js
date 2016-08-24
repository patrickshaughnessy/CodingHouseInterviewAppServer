import React, { Component } from 'react'

import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'

export class CategorySelection extends Component {

  render () {
    const { categories, changeViewing, viewing } = this.props
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
                key={category._id}
                primaryText={category.name}
                value={category._id}
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
export default CategorySelection
