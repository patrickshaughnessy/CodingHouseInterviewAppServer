import React from 'react'

import styles from './styles.css'

function RadioButtons (props) {
  const {
    position, type,
    editing, toggleEditing, deleteLevel,
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
        <div className={styles.details}>
          <div className={styles.section}>
            <p>Type: </p>
            <p className={styles.innerSection}>{type}</p>
          </div>
          <div className={styles.section}>
            <p>Question: </p>
            <input
              className={styles.innerSection}
              value={question}
              onChange={(e) => editQuestion(e.target.value)}
            />
          </div>
          <div className={styles.section}>
            <p>Options: </p>
            <input
              className={styles.innerSection}
              value={options.join(', ')}
              onChange={(e) => editOptions(e.target.value)}
            />
          </div>
          <div className={styles.section}>
            <p>Default Value: </p>
            <input
              className={styles.innerSection}
              value={defaultValue}
              onChange={(e) => editDefaultValue(e.target.value.toString())}
            />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.level}>
          <p>Level {position + 1}</p>
          <button onClick={toggleEditing}>Edit</button>
          <button onClick={deleteLevel}>Delete</button>
        </div>
        <div className={styles.details}>
          <div className={styles.section}>
            <p>Type: </p>
            <p className={styles.innerSection}>{type}</p>
          </div>
          <div className={styles.section}>
            <p>Question: </p>
            <p className={styles.innerSection}>{question}</p>
          </div>
          <div className={styles.section}>
            <p>Options: </p>
            <p className={styles.innerSection}>{options.join(', ')}</p>
          </div>
          <div className={styles.section}>
            <p>Default Value: </p>
            <p className={styles.innerSection}>{defaultValue || '--'}</p>
          </div>
        </div>
      </div>
    )
  }
}

RadioButtons.propTypes = {
  className: React.PropTypes.string
}

export default RadioButtons
