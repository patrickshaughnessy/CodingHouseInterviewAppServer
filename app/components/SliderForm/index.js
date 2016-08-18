import React, { Component } from 'react'

import styles from './styles.css'

class SliderForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      question: '',
      range: 10,
      defaultValue: 5
    }
  }

  render () {
    const { question, range, defaultValue } = this.state
    const { position, type, changeType, addLevel } = this.props
    return (
      <div className={styles.container}>
        <div className={styles.level}>
          <p>Level {position + 1}</p>
          <button onClick={() => addLevel(this.state)}>Add</button>
        </div>
        <div className={styles.details}>
          <div className={styles.section}>
            <p>Type: </p>
            <select value={type} onChange={(e) => changeType(e.target.value)} className={styles.innerSection}>
              <option value='INPUT_BOX'>INPUT_BOX</option>
              <option value='CHECKBOX'>CHECKBOX</option>
              <option value='RADIO'>RADIO</option>
              <option value='SLIDER'>SLIDER</option>
            </select>
          </div>
          <div className={styles.section}>
            <p>Question: </p>
            <input
              type='text'
              className={styles.innerSection}
              value={question}
              onChange={(e) => this.setState({ question: e.target.value })}
            />
          </div>
          <div className={styles.section}>
            <p>Range: </p>
            <input
              type='number'
              min='1'
              className={styles.innerSection}
              value={range}
              onChange={(e) => this.setState({ range: e.target.value })}
            />
          </div>
          <div className={styles.section}>
            <p>Default Value: </p>
            <input
              type='number'
              min='1'
              className={styles.innerSection}
              value={defaultValue}
              onChange={(e) => this.setState({ defaultValue: e.target.value })}
            />
          </div>
        </div>
      </div>
    )
  }
}

SliderForm.propTypes = {
  className: React.PropTypes.string
}

export default SliderForm
