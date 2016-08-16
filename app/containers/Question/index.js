import React, { Component } from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import Level from '../Level'

import styles from './styles.css'

class Question extends Component {

  _renderLevels = () => {
    const { levels, _id } = this.props

    return levels.map((level, i) => {
      level.questionID = _id
      return <Level key={level._id} position={i} {...level} />
    })
  }

  render () {
    const { levels } = this.props
    return (
      <li className={styles.container}>
        <div className={styles.title}>
          <h3>{levels[0].question} ({levels.length === 1 ? levels.length + ' level' : levels.length + ' levels'})</h3>
        </div>
        <div className={styles.innerContainer}>
          {this._renderLevels()}
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
