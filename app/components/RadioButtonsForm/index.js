import React, { Component } from 'react'

import styles from './styles.css'

class RadioButtonsForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      question: '',
      options: [],
      defaultValue: ''
    }
  }

  render () {
    const { question, options, defaultValue } = this.state
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
            <p>Options: </p>
            <input
              type='text'
              className={styles.innerSection}
              value={options.join(', ')}
              onChange={(e) => this.setState({ options: e.target.value.split(/,\s?/) })}
            />
          </div>
          <div className={styles.section}>
            <p>Default Value: </p>
            <input
              type='text'
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

RadioButtonsForm.propTypes = {
  className: React.PropTypes.string
}

export default RadioButtonsForm
