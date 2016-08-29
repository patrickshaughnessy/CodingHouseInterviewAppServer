import React, { Component } from 'react'
import { connect } from 'react-redux'

import Actions from '../Actions/Creators'

import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

export class AddCategory extends Component {

  constructor (props) {
    super(props)
    this.state = {
      open: false,
      name: ''
    }
  }

  _handleCancel = () => {
    this.setState({
      open: false,
      name: ''
    })
  }

  _handleConfirm = () => {
    const { name } = this.state
    if (!name.length) return
    const { addCategory } = this.props
    addCategory({ name })
    this.setState({
      open: false,
      name: ''
    })
  }

  render () {
    const { name } = this.state

    const actions = [
      <FlatButton
        label='Cancel'
        primary
        onTouchTap={this._handleCancel}
      />,
      <FlatButton
        label='Add'
        primary
        keyboardFocused
        onTouchTap={this._handleConfirm}
      />
    ]

    return (
      <div className={this.props.className}>
        <RaisedButton
          label='Add A Category'
          onTouchTap={() => this.setState({ open: true })}
        />
        <Dialog
          title='Add A Category'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={() => this.setState({ open: false })}
        >
          <TextField
            name='new_category'
            value={name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </Dialog>
      </div>
    )
  }
}
AddCategory.propTypes = {
  // changeRoute: React.PropTypes.func
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: (name) => dispatch(Actions.addCategory(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory)
