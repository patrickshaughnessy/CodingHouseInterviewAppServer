import React, { Component } from 'react'

import { ListItem } from 'material-ui/List'
import { Table, TableBody, TableHeader, TableRow, TableHeaderColumn, TableRowColumn } from 'material-ui/Table'

export class Interview extends Component {

  _renderAnswers = (levels, answers) => {
    return levels.map((l, i) => {
      let answer

      switch (l.type) {
        case 'INPUT_BOX':
          answer = answers[i] || '--'
          break
        case 'CHECKBOX':
          if (answers[i] !== undefined) {
            answer = answers[i] ? 'Yes' : 'No'
          } else {
            answer = '--'
          }
          break
        case 'SLIDER':
          answer = answers[i] && `${answers[i]}/${l.range}` || '--'
          break
        case 'RADIO':
          answer = answers[i] || '--'
          break
      }

      return (
        <TableRow key={l._id} style={{height: '100%'}}>
          <TableRowColumn style={{flex: 1, padding: '1em', whiteSpace: 'wrap', justifyContent: 'center'}}>{l.question}</TableRowColumn>
          <TableRowColumn style={{flex: 1, paddingLeft: '2em', whiteSpace: 'wrap', justifyContent: 'center'}}>{answer}</TableRowColumn>
        </TableRow>
      )
    })
  }

  _renderQuestions = (questions) => {
    return questions.map(q => {
      return (
        <TableRow key={q._id}>
          <TableRowColumn style={{whiteSpace: 'wrap'}}>
            <Table
              selectable={false}
            >
              <TableBody
                displayRowCheckbox={false}
              >
                {this._renderAnswers(q.levels, q.answers)}
              </TableBody>
            </Table>
          </TableRowColumn>
        </TableRow>
      )
    })
  }

  _renderData = () => {
    const { data } = this.props
    return data.map(d => {
      return (
        <Table
          key={d.category._id}
          selectable={false}
        >
          <TableHeader
            displaySelectAll={false}
            enableSelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn style={{fontSize: '150%'}}>{d.category.name}</TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn>Question</TableHeaderColumn>
              <TableHeaderColumn>Answer</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
          >
            {this._renderQuestions(d.questions)}
          </TableBody>
        </Table>
      )
    })
  }

  render () {
    const { interviewee } = this.props

    return (
      <ListItem
        primaryText={interviewee.name}
        primaryTogglesNestedList
        nestedItems={this._renderData()}
      />
    )
  }
}
Interview.propTypes = {
  // changeRoute: React.PropTypes.func
}
export default Interview
