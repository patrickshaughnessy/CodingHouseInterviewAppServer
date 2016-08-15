import React, { Component } from 'react'
import InputBox from 'components/InputBox'
import RadioButtons from 'components/RadioButtons'
import Slider from 'components/Slider'
import Checkbox from 'components/Checkbox'

import styles from './styles.css'

class Question extends Component {

  _renderLevels = () => {
    const { levels } = this.props

    return levels.map((level, i) => {
      switch (level.type) {
        case 'INPUT_BOX':
          return <InputBox key={level._id} position={i} {...level} />
        case 'RADIO':
          return <RadioButtons key={level._id} position={i} {...level} />
        case 'SLIDER':
          return <Slider key={level._id} position={i} {...level} />
        case 'CHECKBOX':
          return <Checkbox key={level._id} position={i} {...level} />
      }
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
  levels: React.PropTypes.array
}

export default Question
