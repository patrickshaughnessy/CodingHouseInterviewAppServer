import React from 'react'

import styles from './styles.css'

function InputBox (props) {
  const {
    position, type,
    editing, toggleEditing, deleteLevel,
    isForm, changeType, addLevel,
    question, placeholder,
    editQuestion, editPlaceholder
  } = props

  const setTypeDisplay = function (isForm, type, changeType) {
    if (isForm) {
      return (
        <select value={type} onChange={(e) => changeType(e.target.value)} className={styles.innerSection}>
          <option value='INPUT_BOX'>INPUT_BOX</option>
          <option value='CHECKBOX'>CHECKBOX</option>
          <option value='RADIO'>RADIO</option>
          <option value='SLIDER'>SLIDER</option>
        </select>
      )
    } else {
      return (
        <p className={styles.innerSection}>{type}</p>
      )
    }
  }

  const setButtonDisplay = function (isForm, addLevel, toggleEditing) {
    if (isForm) {
      return (
        <button onClick={addLevel}>Add</button>
      )
    } else {
      return (
        <button onClick={toggleEditing}>Confirm</button>
      )
    }
  }

  if (editing) {
    return (
      <div className={styles.container}>
        <div className={styles.level}>
          <p>Level {position + 1}</p>
          {setButtonDisplay(isForm, addLevel, toggleEditing)}
        </div>
        <div className={styles.details}>
          <div className={styles.section}>
            <p>Type: </p>
            {setTypeDisplay(isForm, type, changeType)}
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
            <p>Placeholder: </p>
            <p className={styles.innerSection}>{placeholder || '--'}</p>
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
