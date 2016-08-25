import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'

import Actions from '../Actions/Creators'
import styles from './Styles/AddQuestionStyle.css'

import { List, ListItem } from 'material-ui/List'
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'

export class AddQuestion extends Component {

  constructor (props) {
    super(props)
    this.state = {
      adding: false,
      open: false,
      type: 'INPUT_BOX',
      question: '',
      placeholder: '',
      label: '',
      options: [],
      defaultValue: false,
      range: 10,
      levels: []
    }
  }

  _cancelAddQuestion = () => {
    this.setState({
      adding: false,
      open: false,
      type: 'INPUT_BOX',
      question: '',
      placeholder: '',
      label: '',
      options: [],
      defaultValue: false,
      range: 10,
      levels: []
    })
  }

  _addQuestion = () => {
    const { levels } = this.state
    if (!levels.length) return
    const { addQuestion, category } = this.props
    const payload = {
      category,
      levels
    }
    addQuestion(payload)
    this._cancelAddQuestion()
  }

  _cancelAddLevel = () => {
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

  _addLevel = () => {
    const { type, question, placeholder, label, options, defaultValue, range, levels } = this.state
    this.setState({
      open: false,
      type: 'INPUT_BOX',
      question: '',
      placeholder: '',
      label: '',
      options: [],
      defaultValue: false,
      range: 10,
      levels: levels.concat({
        uuid: uuid.v4(),
        type,
        question,
        placeholder,
        label,
        options,
        defaultValue,
        range
      })
    })
  }

  _renderLevels = () => {
    const { levels } = this.state

    return levels.map(level => {
      const { uuid, type, question, placeholder, label, options, defaultValue, range } = level
      const renderPlaceholder = (type === 'INPUT_BOX')
      const renderLabel = (type === 'CHECKBOX')
      const renderOptions = (type === 'RADIO')
      const renderDefaultValue = (type === 'RADIO' || type === 'CHECKBOX' || type === 'SLIDER')
      const renderRange = (type === 'SLIDER')

      return (
        <ListItem key={uuid}>
          <Table
            selectable={false}
          >
            <TableBody
              displayRowCheckbox={false}
              showRowHover
            >
              <TableRow>
                <TableRowColumn>Type: </TableRowColumn>
                <TableRowColumn>{type}</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Question: </TableRowColumn>
                <TableRowColumn style={{whiteSpace: 'normal'}}>{question}</TableRowColumn>
              </TableRow>
              {renderPlaceholder &&
                <TableRow>
                  <TableRowColumn>Placeholder: </TableRowColumn>
                  <TableRowColumn>{placeholder}</TableRowColumn>
                </TableRow>
              }
              {renderOptions &&
                <TableRow>
                  <TableRowColumn>Options: </TableRowColumn>
                  <TableRowColumn>{options.join(', ')}</TableRowColumn>
                </TableRow>
              }
              {renderLabel &&
                <TableRow>
                  <TableRowColumn>Label: </TableRowColumn>
                  <TableRowColumn>{label}</TableRowColumn>
                </TableRow>
              }
              {renderDefaultValue &&
                <TableRow>
                  <TableRowColumn>Default Value: </TableRowColumn>
                  <TableRowColumn>{defaultValue.toString().toUpperCase()}</TableRowColumn>
                </TableRow>
              }
              {renderRange &&
                <TableRow>
                  <TableRowColumn>Range: </TableRowColumn>
                  <TableRowColumn>{range}</TableRowColumn>
                </TableRow>
              }
            </TableBody>
          </Table>
        </ListItem>
      )
    })
  }

  _renderAddLevel = () => {
    const { type, question, placeholder, label, options, defaultValue, range } = this.state
    const renderPlaceholder = (type === 'INPUT_BOX')
    const renderLabel = (type === 'CHECKBOX')
    const renderOptions = (type === 'RADIO')
    const renderDefaultValue = (type === 'RADIO' || type === 'CHECKBOX' || type === 'SLIDER')
    const renderRange = (type === 'SLIDER')

    const actions = [
      <FlatButton
        label='Cancel'
        primary
        onTouchTap={this._cancelAddLevel}
      />,
      <FlatButton
        label='Add'
        primary
        keyboardFocused
        onTouchTap={this._addLevel}
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
                    name='question'
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
                      name='placeholder'
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
                      name='options'
                      type='text'
                      value={Array.isArray(options) ? options.join(', ') : options}
                      onChange={(e) => this.setState({ options: e.target.value.split(/,\s?/) })}
                    />
                  </TableRowColumn>
                </TableRow>
              }
              {renderLabel &&
                <TableRow>
                  <TableRowColumn>Label: </TableRowColumn>
                  <TableRowColumn>
                    <TextField
                      name='label'
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
                      name='range'
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
                      name='defaultValue'
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

  _renderButtonDisplay = () => {
    const { adding } = this.state

    if (adding) {
      return (
        <Paper className={styles.buttonsWrapper}>
          <RaisedButton
            label='Cancel'
            onTouchTap={this._cancelAddQuestion}
            className={styles.addButton}
          />
          <RaisedButton
            label='Confirm'
            primary
            onTouchTap={this._addQuestion}
            className={styles.addButton}
          />
        </Paper>
      )
    } else {
      return (
        <Paper className={styles.buttonsWrapper}>
          <RaisedButton
            label='Add A Question'
            onTouchTap={() => this.setState({ adding: !adding })}
            fullWidth
            className={styles.addButton}
          />
        </Paper>
      )
    }
  }

  _renderNewQuestion = () => {
    const { adding, levels } = this.state
    if (adding && levels.length) {
      return (
        <List>
          {this._renderLevels()}
          {this._renderAddLevel()}
        </List>
      )
    } else if (adding) {
      return (
        <List>
          {this._renderAddLevel()}
        </List>
      )
    } else {
      return null
    }
  }

  render () {
    return (
      <Paper>
        {this._renderButtonDisplay()}
        {this._renderNewQuestion()}
      </Paper>
    )
  }
}
AddQuestion.propTypes = {
  // changeRoute: React.PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    category: state.control.viewing || state.categories.all[0]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addQuestion: (question) => dispatch(Actions.addQuestion(question))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion)
