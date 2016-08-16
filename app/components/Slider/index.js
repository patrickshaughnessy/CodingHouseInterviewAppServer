import React from 'react'

import styles from './styles.css'

function Slider (props) {
  const { position, type, question, defaultValue, range, editing, toggleEditing, editQuestion, editPlaceholder } = props

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
            Range:
            <input
              value={range}
              onChange={(e) => editPlaceholder(e.target.value)}
            />
          </p>
          <p>
            Default Value:
            <input
              value={defaultValue}
              onChange={(e) => editPlaceholder(e.target.value)}
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
          <p>Range: {range}</p>
          <p>Default Value: {defaultValue.toString()}</p>
        </div>
      </div>
    )
  }
}

Slider.propTypes = {
  className: React.PropTypes.string
}

export default Slider
