import React, { Component } from 'react'

import styles from './Styles/LevelStyle.css'

import { List, ListItem } from 'material-ui/List'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'

export class EditLevel extends Component {

  constructor (props) {
    super(props)
    this.state = {
      open: false,
      ...this.props
    }
  }

  render () {
    const { type, question, placeholder, label, options, defaultValue, range } = this.state
    const renderPlaceholder = (type === 'INPUT_BOX')
    const renderLabel = (type === 'CHECKBOX')
    const renderOptions = (type === 'RADIO')
    const renderDefaultValue = (type === 'RADIO' || type === 'CHECKBOX' || type === 'SLIDER')
    const renderRange = (type === 'SLIDER')
    return (
      <TableHeaderColumn>
        <RaisedButton label='Edit' onTouchTap={() => this.setState({ open: true })} />
        <Dialog
          title='Edit Level'
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
                  <SelectField value={type} onChange={(e,k,value) => this.setState({ type: value })}>
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
                      type='text'
                      value={label}
                      onChange={(e) => this.setState({ label: e.target.value })}
                    />
                  </TableRowColumn>
                </TableRow>
              }
              {renderDefaultValue &&
                <TableRow>
                  <TableRowColumn>Default Value: </TableRowColumn>
                  <TableRowColumn>
                    <TextField
                      value={defaultValue}
                      onChange={(e) => this.setState({ defaultValue: e.target.value })}
                    />
                  </TableRowColumn>
                </TableRow>
              }
              {renderRange &&
                <TableRow>
                  <TableRowColumn>Range: </TableRowColumn>
                  <TableRowColumn>
                    <TextField
                      type='text'
                      value={range}
                      onChange={(e) => this.setState({ range: e.target.value })}
                    />
                  </TableRowColumn>
                </TableRow>
              }
            </TableBody>
          </Table>
        </Dialog>
      </TableHeaderColumn>
    )
  }
}
EditLevel.propTypes = {
  // changeRoute: React.PropTypes.func
}
export default EditLevel
