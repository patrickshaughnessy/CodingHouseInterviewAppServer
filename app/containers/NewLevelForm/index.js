import React, { Component } from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import InputBoxForm from 'components/InputBoxForm'
// import RadioButtons from 'components/RadioButtons'
// import Slider from 'components/Slider'
// import Checkbox from 'components/Checkbox'

import {
  addLevel
} from './actions'

import styles from './styles.css'

class Level extends Component {

  constructor (props) {
    super(props)

    this.state = {
      type: 'INPUT_BOX'
    }
  }

  _addLevel = (data) => {
    const { type } = this.state
    const { questionID, addLevel } = this.props

    const level = { type, ...data }

    const payload = { questionID, level }

    addLevel(payload)
    // const { editing } = this.state
    // if (editing) {
    //   const { updateLevel, questionID, _id } = this.props
    //
    //   let level = Object.assign({}, this.props)
    //   let shouldSend
    //   for (let key in level) {
    //     if (this.state[key] || this.state[key] === '') {
    //       shouldSend = true
    //       level[key] = this.state[key]
    //     }
    //   }
    //
    //   if (shouldSend) {
    //     let payload = {
    //       questionID: questionID,
    //       levelID: _id,
    //       level: level
    //     }
    //     updateLevel(payload)
    //   }
    // }
    // this.setState({ editing: !editing })
  }

  _changeType = (type) => {
    console.log(type)
    this.setState({ type })
  }

  _renderLevel = () => {
    const { type } = this.state
    const { position } = this.props

    switch (type) {
      case 'INPUT_BOX':
        const inputProps = {
          type,
          position,
          changeType: this._changeType,
          addLevel: this._addLevel
        }
        return <InputBoxForm {...inputProps} />
      // case 'RADIO':
      //   const radioProps = {
      //     type,
      //     position,
      //     editing,
      //     question,
      //     options,
      //     defaultValue,
      //     toggleEditing: this._toggleEditing,
      //     editQuestion: this._editQuestion,
      //     editOptions: this._editOptions,
      //     editDefaultValue: this._editDefaultValue
      //   }
      //   return <RadioButtons key={_id} {...radioProps} />
      // case 'SLIDER':
      //   const sliderProps = {
      //     type,
      //     position,
      //     editing,
      //     question,
      //     range,
      //     defaultValue,
      //     toggleEditing: this._toggleEditing,
      //     editQuestion: this._editQuestion,
      //     editRange: this._editRange,
      //     editDefaultValue: this._editDefaultValue
      //   }
      //   return <Slider key={_id} {...sliderProps} />
      // case 'CHECKBOX':
      //   const checkboxProps = {
      //     _id,
      //     type,
      //     position,
      //     editing,
      //     question,
      //     label,
      //     defaultValue,
      //     toggleEditing: this._toggleEditing,
      //     editQuestion: this._editQuestion,
      //     editLabel: this._editLabel,
      //     editDefaultValue: this._editDefaultValue
      //   }
      //   return <Checkbox key={_id} {...checkboxProps} />
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
}

const mapStateToProps = createStructuredSelector({

})

function mapDispatchToProps (dispatch) {
  return {
    addLevel: (payload) => dispatch(addLevel(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Level)
