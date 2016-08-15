import React from 'react'

import styles from './styles.css'

function Slider (props) {
  const { position, type, question, range, defaultValue } = props
  return (
    <div className={styles.container}>
      <div className={styles.level}>
        <p>Level {position + 1}</p>
      </div>
      <div className={styles.innerContainer}>
        <p>Type: {type}</p>
        <p>Question: {question}</p>
        <p>Range: {range}</p>
        <p>Default Value: {defaultValue}</p>
      </div>
    </div>
  )
}

Slider.propTypes = {
  className: React.PropTypes.string
}

export default Slider
