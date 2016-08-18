import React, { Component } from 'react'

import styles from './styles.css'

class CheckboxForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      question: '',
      label: '',
      defaultValue: true
    }
  }

  render () {
    const { question, label, defaultValue } = this.state
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
            <p>Label: </p>
            <input
              type='text'
              className={styles.innerSection}
              value={label}
              onChange={(e) => this.setState({ label: e.target.value })}
            />
          </div>
          <div className={styles.section}>
            <p>Default Value: </p>
            <p className={styles.innerSection}>
              <input
                type='radio'
                className={styles.innerSection}
                name={position + '_defaultValue'}
                checked={defaultValue === true}
                onChange={(e) => this.setState({ defaultValue: true })}
              /> True
              <input
                type='radio'
                className={styles.innerSection}
                name={position + '_defaultValue'}
                checked={defaultValue === false}
                onChange={(e) => this.setState({ defaultValue: false })}
              /> False
            </p>
          </div>
        </div>
      </div>
    )
  }
}

CheckboxForm.propTypes = {
  className: React.PropTypes.string
}

export default CheckboxForm
