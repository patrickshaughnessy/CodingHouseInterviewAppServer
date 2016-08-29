import React, { Component } from 'react'
import { connect } from 'react-redux'

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import RaisedButton from 'material-ui/RaisedButton'

import Actions from '../Actions/Creators'

import styles from './Styles/CategoryTableStyle.css'

export class CategoryTable extends Component {

  constructor (props) {
    super(props)

    const { questions, active } = this.props

    this.state = {
      editing: false,
      active: active.map(a => questions.indexOf(a))
    }
  }

  _handleEdit = () => {
    const { questions, category, editSettings } = this.props
    const { editing, active } = this.state

    if (editing) {
      const payload = {
        category: category._id,
        questions: questions.filter((q, i) => active.indexOf(i) !== -1)
      }
      editSettings(payload)
    }

    this.setState({ editing: !editing })
  }

  _renderQuestions = () => {
    const { questionsById, levelsById, questions } = this.props
    const { editing, active } = this.state
    return questions.map((question, i) => {
      const q = questionsById[question]
      const display = levelsById[q.levels[0]].question

      return (
        <TableRow
          key={i}
          value={question}
          selectable={editing}
          selected={active.indexOf(i) !== -1}
        >
          <TableRowColumn>
            {display}
          </TableRowColumn>
        </TableRow>
      )
    })
  }

  render () {
    const { category, questions } = this.props
    const { editing } = this.state
    return (
      <Table
        className={styles.container}
        multiSelectable
        onRowSelection={(active) => this.setState({ active })}
      >
        <TableHeader
          displaySelectAll={false}
        >
          <TableRow>
            <TableHeaderColumn>{category.name} Questions</TableHeaderColumn>
            <TableHeaderColumn>
              <RaisedButton
                label={editing ? 'Confirm' : 'Edit'}
                onTouchTap={this._handleEdit}
              />
            </TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          deselectOnClickaway={false}
        >
          {questions.length && this._renderQuestions()}
        </TableBody>
      </Table>
    )
  }
}
CategoryTable.propTypes = {
  // changeRoute: React.PropTypes.func
}
const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editSettings: (category) => dispatch(Actions.editSettings(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryTable)
