import React, { Component } from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import CheckboxForm from 'components/CheckboxForm'
import InputBoxForm from 'components/InputBoxForm'
import RadioButtonsForm from 'components/RadioButtonsForm'
import SliderForm from 'components/SliderForm'

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

    const levelFormProps = {
      type,
      position,
      changeType: this._changeType,
      addLevel: this._addLevel
    }

    switch (type) {
      case 'CHECKBOX':
        return <CheckboxForm {...levelFormProps} />
      case 'INPUT_BOX':
        return <InputBoxForm {...levelFormProps} />
      case 'RADIO':
        return <RadioButtonsForm {...levelFormProps} />
      case 'SLIDER':
        return <SliderForm {...levelFormProps} />
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
