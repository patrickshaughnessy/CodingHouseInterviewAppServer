import React from 'react'

import styles from './styles.css'

function Slider (props) {
  const {
    position, type,
    editing, toggleEditing,
    question, range, defaultValue,
    editQuestion, editRange, editDefaultValue
  } = props

  if (editing) {
    return (
      <div className={styles.container}>
        <div className={styles.level}>
          <p>Level {position + 1}</p>
          <button onClick={toggleEditing}>Confirm</button>
          <button>Delete</button>
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
            <p>Range: </p>
            <input
              type='number'
              min='1'
              className={styles.innerSection}
              value={range}
              onChange={(e) => editRange(e.target.value)}
            />
          </div>
          <div className={styles.section}>
            <p>Default Value: </p>
            <input
              type='number'
              min='1'
              className={styles.innerSection}
              value={defaultValue}
              onChange={(e) => editDefaultValue(e.target.value)}
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
            <p>Range: </p>
            <p className={styles.innerSection}>{range}</p>
          </div>
          <div className={styles.section}>
            <p>Default Value: </p>
            <p className={styles.innerSection}>{defaultValue}</p>
          </div>
        </div>
      </div>
    )
  }
}

Slider.propTypes = {
  className: React.PropTypes.string
}

export default Slider
