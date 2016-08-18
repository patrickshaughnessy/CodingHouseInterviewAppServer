import React, { Component } from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import Level from '../Level'
import NewLevelForm from '../NewLevelForm'

import styles from './styles.css'

class Question extends Component {

  constructor (props) {
    super(props)

    this.state = {
      adding: true
    }
  }

  _renderLevels = () => {
    const { levels, _id } = this.props

    return levels.map((level, i) => {
      level.questionID = _id
      level.position = i
      return <Level key={level._id} {...level} />
    })
  }

  _addLevel = () => {
    const { adding } = this.state
    this.setState({adding: !adding})
  }

  _renderNewLevelForm = () => {
    return <h1>New Level Form</h1>
  }

  render () {
    const { levels, _id } = this.props
    const { adding } = this.state
    return (
      <li className={styles.container}>
        <div className={styles.title}>
          <h3>{levels[0].question} ({levels.length === 1 ? levels.length + ' level' : levels.length + ' levels'})</h3>
          <button>Edit</button>
          <button>Delete</button>
          <button onClick={this._addLevel}>Add Level</button>
        </div>
        <div className={styles.innerContainer}>
          {this._renderLevels()}
          {adding ? <NewLevelForm position={levels.length} questionID={_id} /> : null}
        </div>
      </li>
    )
  }
}

Question.propTypes = {
  className: React.PropTypes.string,
  levels: React.PropTypes.array,
  editQuestion: React.PropTypes.func
}

const mapStateToProps = createStructuredSelector({

})

function mapDispatchToProps (dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
