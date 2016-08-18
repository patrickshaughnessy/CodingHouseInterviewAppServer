import React, { Component } from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import InputBox from 'components/InputBox'
import RadioButtons from 'components/RadioButtons'
import Slider from 'components/Slider'
import Checkbox from 'components/Checkbox'

import {
  updateLevel,
  deleteLevel
} from './actions'

import styles from './styles.css'

class Level extends Component {

  constructor (props) {
    super(props)

    this.state = {
      editing: false
    }
  }

  _deleteLevel = () => {
    const { deleteLevel, _id } = this.props
    deleteLevel({ levelID: _id })
  }

  _toggleEditing = () => {
    const { editing } = this.state
    if (editing) {
      const { updateLevel, questionID, _id } = this.props

      let level = Object.assign({}, this.props)
      let shouldSend
      for (let key in level) {
        if (this.state[key] || this.state[key] === '') {
          shouldSend = true
          level[key] = this.state[key]
        }
      }

      if (shouldSend) {
        let payload = {
          questionID: questionID,
          levelID: _id,
          level: level
        }
        updateLevel(payload)
      }
    }
    this.setState({ editing: !editing })
  }

  _editQuestion = (question) => {
    this.setState({ question })
  }

  _editPlaceholder = (placeholder) => {
    this.setState({ placeholder })
  }

  _editOptions = (options) => {
    this.setState({ options: options.split(', ') })
  }

  _editDefaultValue = (defaultValue) => {
    this.setState({ defaultValue })
  }

  _editLabel = (label) => {
    this.setState({ label })
  }

  _editRange = (range) => {
    this.setState({ range })
  }

  _getCurrentValue = (type) => {
    if (this.state[type]) {
      return this.state[type]
    } else if (this.state[type] === '') {
      return ''
    } else if (this.state[type] === false) {
      return false
    } else {
      return this.props[type]
    }
  }

  _renderLevel = () => {
    const { type, _id, position } = this.props
    const { editing } = this.state
    const question = this._getCurrentValue('question')
    const options = this._getCurrentValue('options')
    const range = this._getCurrentValue('range')
    const label = this._getCurrentValue('label')
    const placeholder = this._getCurrentValue('placeholder')
    const defaultValue = this._getCurrentValue('defaultValue')

    switch (type) {
      case 'INPUT_BOX':
        const inputProps = {
          type,
          position,
          editing,
          question,
          placeholder,
          toggleEditing: this._toggleEditing,
          editQuestion: this._editQuestion,
          editPlaceholder: this._editPlaceholder,
          deleteLevel: this._deleteLevel
        }
        return <InputBox key={_id} {...inputProps} />
      case 'RADIO':
        const radioProps = {
          type,
          position,
          editing,
          question,
          options,
          defaultValue,
          toggleEditing: this._toggleEditing,
          editQuestion: this._editQuestion,
          editOptions: this._editOptions,
          editDefaultValue: this._editDefaultValue
        }
        return <RadioButtons key={_id} {...radioProps} />
      case 'SLIDER':
        const sliderProps = {
          type,
          position,
          editing,
          question,
          range,
          defaultValue,
          toggleEditing: this._toggleEditing,
          editQuestion: this._editQuestion,
          editRange: this._editRange,
          editDefaultValue: this._editDefaultValue
        }
        return <Slider key={_id} {...sliderProps} />
      case 'CHECKBOX':
        const checkboxProps = {
          _id,
          type,
          position,
          editing,
          question,
          label,
          defaultValue,
          toggleEditing: this._toggleEditing,
          editQuestion: this._editQuestion,
          editLabel: this._editLabel,
          editDefaultValue: this._editDefaultValue
        }
        return <Checkbox key={_id} {...checkboxProps} />
    }
  }

  render () {
    return (
      <div className={styles.container}>
        {this._renderLevel()}
      </div>
    )
  }
}

Level.propTypes = {
  className: React.PropTypes.string,
  levels: React.PropTypes.array,
  editQuestion: React.PropTypes.func
}

const mapStateToProps = createStructuredSelector({

})

function mapDispatchToProps (dispatch) {
  return {
    updateLevel: (payload) => dispatch(updateLevel(payload)),
    deleteLevel: (id) => dispatch(deleteLevel(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Level)