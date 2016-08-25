import React, { Component } from 'react'
import { connect } from 'react-redux'

import Actions from '../Actions/Creators'
// import styles from './Styles/LevelStyle.css'

import { Table, TableBody, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

export class DeleteLevel extends Component {

  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  _handleCancel = () => {
    this.setState({ open: false })
  }

  _handleConfirm = () => {
    const { _id, deleteLevel } = this.props
    deleteLevel(_id)
    this.setState({ open: false })
  }

  render () {
    const actions = [
      <FlatButton
        label='Cancel'
        primary
        keyboardFocused
        onTouchTap={this._handleCancel}
      />,
      <FlatButton
        label='Delete'
        primary
        onTouchTap={this._handleConfirm}
      />
    ]

    return (
      <TableHeaderColumn>
        <RaisedButton label='Delete' onTouchTap={() => this.setState({ open: true })} />
        <Dialog
          title='Are you sure?'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={() => this.setState({ open: false })}
        >
          This will permanently delete this level from the question.
        </Dialog>
      </TableHeaderColumn>
    )
  }
}
DeleteLevel.propTypes = {
  // changeRoute: React.PropTypes.func
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteLevel: (level) => dispatch(Actions.deleteLevel(level))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteLevel)
