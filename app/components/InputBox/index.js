import React from 'react'

import styles from './styles.css'

function InputBox (props) {
  const { position, type, question, placeholder, editing, toggleEditing, editQuestion, editPlaceholder } = props

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
            <p>Placeholder: </p>
            <input
              className={styles.innerSection}
              value={placeholder}
              onChange={(e) => editPlaceholder(e.target.value)}
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
            <p>Placeholder: </p>
            <p className={styles.innerSection}>{placeholder}</p>
          </div>
        </div>
      </div>
    )
  }
}

InputBox.propTypes = {
  className: React.PropTypes.string
}

export default InputBox
