import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import NotificationSystem from 'react-notification-system'

import LinearProgress from 'material-ui/LinearProgress'

import Actions from '../Actions/Creators'

// import CategorySelection from './CategorySelection'
// import QuestionsList from './QuestionsList'
// import AddQuestion from './AddQuestion'

export class SettingsPage extends Component {

  // constructor (props) {
  //   super(props)
  // }

  componentWillMount () {
    const { user, changeRoute } = this.props
    if (!user) {
      changeRoute('/login')
    } else {
      const { requestSettings } = this.props
      requestSettings(user)
    }
  }

  componentWillReceiveProps (nextProps) {
    const { notificationSystem } = this.refs
    const { error, success } = nextProps
    if (error) {
      notificationSystem.addNotification({
        message: error,
        level: 'error'
      })
    }
    if (success) {
      notificationSystem.addNotification({
        message: success,
        level: 'success'
      })
    }
  }

  render () {
    const { fetching } = this.props
    return (
      <div>
        <Helmet
          title='Settings'
          meta={[
            { name: 'description', content: 'Settings for your interview' }
          ]}
        />
        <NotificationSystem ref='notificationSystem' />
        {fetching ? <LinearProgress /> : null}

      </div>
    )
  }
}
SettingsPage.propTypes = {
  // changeRoute: React.PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    fetching: state.control.fetching,
    success: state.control.success,
    error: state.control.error,
    user: state.user.info
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestSettings: (user) => dispatch(Actions.requestSettings(user)),
    changeRoute: (url) => dispatch(push(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage)
