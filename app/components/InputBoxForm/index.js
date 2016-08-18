import React, { Component } from 'react'

import styles from './styles.css'

class InputBoxForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      question: '',
      placeholder: ''
    }
  }

  render () {
    const { question, placeholder } = this.state
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
            <p>Placeholder: </p>
            <input
              type='text'
              className={styles.innerSection}
              value={placeholder}
              onChange={(e) => this.setState({ placeholder: e.target.value })}
            />
          </div>
        </div>
      </div>
    )
  }
}

InputBoxForm.propTypes = {
  className: React.PropTypes.string
}

export default InputBoxForm
