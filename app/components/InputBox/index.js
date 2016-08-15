import React from 'react'

import styles from './styles.css'

function InputBox (props) {
  let { position, type, question, placeholder } = props

  return (
    <div className={styles.container}>
      <div className={styles.level}>
        <p>Level {position + 1}</p>
      </div>
      <div className={styles.innerContainer}>
        <p>Type: {type}</p>
        <p>Question: {question}</p>
        <p>Placeholder: {placeholder}</p>
      </div>
    </div>
  )
}

InputBox.propTypes = {
  className: React.PropTypes.string
}

export default InputBox
