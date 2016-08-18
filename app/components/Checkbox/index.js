import React from 'react'

import styles from './styles.css'

function Checkbox (props) {
  let {
    position, type, _id,
    editing, toggleEditing, deleteLevel,
    question, label, defaultValue,
    editQuestion, editLabel, editDefaultValue
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
              type='text'
              className={styles.innerSection}
              value={question}
              onChange={(e) => editQuestion(e.target.value)}
            />
          </div>
          <div className={styles.section}>
            <p>Label: </p>
            <input
              type='text'
              className={styles.innerSection}
              value={label}
              onChange={(e) => editLabel(e.target.value)}
            />
          </div>
          <div className={styles.section}>
            <p>Default Value: </p>
            <p className={styles.innerSection}>
              <input
                type='radio'
                className={styles.innerSection}
                name={_id + '_defaultValue'}
                checked={defaultValue === true}
                onChange={(e) => editDefaultValue(true)}
              /> True
              <input
                type='radio'
                className={styles.innerSection}
                name={_id + '_defaultValue'}
                checked={defaultValue === false}
                onChange={(e) => editDefaultValue(false)}
              /> False
            </p>
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
          {position !== 0 ? <button onClick={deleteLevel}>Delete</button> : null}
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
            <p>Label: </p>
            <p className={styles.innerSection}>{label}</p>
          </div>
          <div className={styles.section}>
            <p>Default Value: </p>
            <p className={styles.innerSection}>{defaultValue ? 'True' : 'False'}</p>
          </div>
        </div>
      </div>
    )
  }
}

Checkbox.propTypes = {
  className: React.PropTypes.string
}

export default Checkbox
