import React, { Component } from 'react'
import { connect } from 'react-redux'

import Actions from '../Actions/Creators'
// import styles from './Styles/LevelStyle.css'

import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

export class DeleteQuestion extends Component {

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
    const { questionID, deleteQuestion } = this.props
    deleteQuestion(questionID)
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
      <div>
        <RaisedButton
          label='Delete Question'
          onTouchTap={() => this.setState({ open: true })}
          fullWidth
        />
        <Dialog
          title='Are you sure?'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={() => this.setState({ open: false })}
        >
          This will permanently delete this question.
        </Dialog>
      </div>
    )
  }
}
DeleteQuestion.propTypes = {
  // changeRoute: React.PropTypes.func
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteQuestion: (question) => dispatch(Actions.deleteQuestion(question))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteQuestion)
