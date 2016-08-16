import React from 'react'

import styles from './styles.css'

function RadioButtons (props) {
  const {
    position, type,
    editing, toggleEditing,
    question, options, defaultValue,
    editQuestion, editOptions, editDefaultValue
  } = props

  if (editing) {
    return (
      <div className={styles.container}>
        <div className={styles.level}>
          <p>Level {position + 1}</p>
          <button onClick={toggleEditing}>Confirm</button>
        </div>
        <div className={styles.innerContainer}>
          <p>Type: {type}</p>
          <p>
            Question:
            <input
              value={question}
              onChange={(e) => editQuestion(e.target.value)}
            />
          </p>
          <p>
            Options:
            <input
              value={options.join(', ')}
              onChange={(e) => editOptions(e.target.value)}
            />
          </p>
          <p>
            Default Value:
            <input
              value={defaultValue}
              onChange={(e) => editDefaultValue(e.target.value.toString())}
            />
          </p>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.level}>
          <p>Level {position + 1}</p>
          <button onClick={toggleEditing}>Edit</button>
        </div>
        <div className={styles.innerContainer}>
          <p>Type: {type}</p>
          <p>Question: {question}</p>
          <p>Options: {options.join(', ')}</p>
          <p>Default Value: {defaultValue || '--'}</p>
        </div>
      </div>
    )
  }
}

RadioButtons.propTypes = {
  className: React.PropTypes.string
}

export default RadioButtons
