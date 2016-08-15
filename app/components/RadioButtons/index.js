import React from 'react'

import styles from './styles.css'

function RadioButtons (props) {
  let { position, type, question, options } = props

  return (
    <div className={styles.container}>
      <div className={styles.level}>
        <p>Level {position + 1}</p>
      </div>
      <div className={styles.innerContainer}>
        <p>Type: {type}</p>
        <p>Question: {question}</p>
        <p>Options: {options}</p>
      </div>
    </div>
  )
}

RadioButtons.propTypes = {
  className: React.PropTypes.string
}

export default RadioButtons
