import React from 'react'

import styles from './styles.css'

function Checkbox (props) {
  let { position, type, question, label, defaultValue } = props

  return (
    <div className={styles.container}>
      <div className={styles.level}>
        <p>Level {position + 1}</p>
      </div>
      <div className={styles.innerContainer}>
        <p>Type: {type}</p>
        <p>Question: {question}</p>
        <p>Label: {label}</p>
        <p>defaultValue: {defaultValue.toString()}</p>
      </div>
    </div>
  )
}

Checkbox.propTypes = {
  className: React.PropTypes.string
}

export default Checkbox
