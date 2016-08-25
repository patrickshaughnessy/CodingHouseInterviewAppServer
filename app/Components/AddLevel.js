import React, { Component } from 'react'
import { connect } from 'react-redux'

import Actions from '../Actions/Creators'
// import styles from './Styles/LevelStyle.css'

import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

export class AddLevel extends Component {

  constructor (props) {
    super(props)
    this.state = {
      open: false,
      type: 'INPUT_BOX',
      question: '',
      placeholder: '',
      label: '',
      options: [],
      defaultValue: false,
      range: 10
    }
  }

  _handleCancel = () => {
    this.setState({
      open: false,
      type: 'INPUT_BOX',
      question: '',
      placeholder: '',
      label: '',
      options: [],
      defaultValue: false,
      range: 10
    })
  }

  _handleConfirm = () => {
    const { type, question, placeholder, label, options, defaultValue, range } = this.state
    const { addLevel, questionID } = this.props
    const payload = {
      questionID,
      level: { type, question, placeholder, label, options, defaultValue, range }
    }
    addLevel(payload)
    this.setState({
      open: false,
      type: 'INPUT_BOX',
      question: '',
      placeholder: '',
      label: '',
      options: [],
      defaultValue: false,
      range: 10
    })
  }

  render () {
    const { type, question, placeholder, label, options, defaultValue, range } = this.state
    const { questionID } = this.props
    const renderPlaceholder = (type === 'INPUT_BOX')
    const renderLabel = (type === 'CHECKBOX')
    const renderOptions = (type === 'RADIO')
    const renderDefaultValue = (type === 'RADIO' || type === 'CHECKBOX' || type === 'SLIDER')
    const renderRange = (type === 'SLIDER')

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
      <div>
        <RaisedButton
          label='Add A Level'
          onTouchTap={() => this.setState({ open: true })}
          fullWidth
        />
        <Dialog
          title='Add A Level'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={() => this.setState({ open: false })}
        >
          <Table
            selectable={false}
          >
            <TableBody
              displayRowCheckbox={false}
              showRowHover
            >
              <TableRow>
                <TableRowColumn>Type: </TableRowColumn>
                <TableRowColumn>
                  <SelectField value={type} onChange={(e, k, value) => this.setState({ type: value })}>
                    <MenuItem value='INPUT_BOX' primaryText='INPUT_BOX' />
                    <MenuItem value='RADIO' primaryText='RADIO' />
                    <MenuItem value='CHECKBOX' primaryText='CHECKBOX' />
                    <MenuItem value='SLIDER' primaryText='SLIDER' />
                  </SelectField>
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Question: </TableRowColumn>
                <TableRowColumn style={{whiteSpace: 'normal'}}>
                  <TextField
                    name={'question_' + questionID}
                    type='text'
                    value={question}
                    onChange={(e) => this.setState({ question: e.target.value })}
                  />
                </TableRowColumn>
              </TableRow>
              {renderPlaceholder &&
                <TableRow>
                  <TableRowColumn>Placeholder: </TableRowColumn>
                  <TableRowColumn>
                    <TextField
                      name={'placeholder_' + questionID}
                      type='text'
                      value={placeholder}
                      onChange={(e) => this.setState({ placeholder: e.target.value })}
                    />
                  </TableRowColumn>
                </TableRow>
              }
              {renderOptions &&
                <TableRow>
                  <TableRowColumn>Options: </TableRowColumn>
                  <TableRowColumn>
                    <TextField
                      name={'options_' + questionID}
                      type='text'
                      value={Array.isArray(options) ? options.join(', ') : options}
                      onChange={(e) => this.setState({ options: e.target.value })}
                    />
                  </TableRowColumn>
                </TableRow>
              }
              {renderLabel &&
                <TableRow>
                  <TableRowColumn>Label: </TableRowColumn>
                  <TableRowColumn>
                    <TextField
                      name={'label_' + questionID}
                      type='text'
                      value={label}
                      onChange={(e) => this.setState({ label: e.target.value })}
                    />
                  </TableRowColumn>
                </TableRow>
              }
              {renderRange &&
                <TableRow>
                  <TableRowColumn>Range: </TableRowColumn>
                  <TableRowColumn>
                    <TextField
                      name={'range_' + questionID}
                      type='text'
                      value={range}
                      onChange={(e) => this.setState({ range: e.target.value })}
                    />
                  </TableRowColumn>
                </TableRow>
              }
              {renderDefaultValue &&
                <TableRow>
                  <TableRowColumn>Default Value: </TableRowColumn>
                  <TableRowColumn>
                    <TextField
                      name={'defaultValue_' + questionID}
                      value={defaultValue}
                      onChange={(e) => this.setState({ defaultValue: e.target.value })}
                    />
                  </TableRowColumn>
                </TableRow>
              }
            </TableBody>
          </Table>
        </Dialog>
      </div>
    )
  }
}
AddLevel.propTypes = {
  // changeRoute: React.PropTypes.func
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addLevel: (level) => dispatch(Actions.addLevel(level)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLevel)
