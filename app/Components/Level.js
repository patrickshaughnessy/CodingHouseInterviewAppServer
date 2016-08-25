import React, { Component } from 'react'

// import styles from './Styles/LevelStyle.css'

import { ListItem } from 'material-ui/List'
import { Table, TableBody, TableHeader, TableRow, TableRowColumn } from 'material-ui/Table'

import EditLevel from './EditLevel'
import DeleteLevel from './DeleteLevel'

export class Level extends Component {
  render () {
    const { type, question, placeholder, label, options, defaultValue, range } = this.props
    const renderPlaceholder = (type === 'INPUT_BOX')
    const renderLabel = (type === 'CHECKBOX')
    const renderOptions = (type === 'RADIO')
    const renderDefaultValue = (type === 'RADIO' || type === 'CHECKBOX' || type === 'SLIDER')
    const renderRange = (type === 'SLIDER')

    return (
      <ListItem>
        <Table
          selectable={false}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <EditLevel {...this.props} />
              <DeleteLevel {...this.props} />
            </TableRow>
          </TableHeader>
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
                <TableRowColumn>{defaultValue && defaultValue.toString().toUpperCase() || 'N/A'}</TableRowColumn>
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
  }
}
Level.propTypes = {
  // changeRoute: React.PropTypes.func
}
export default Level
