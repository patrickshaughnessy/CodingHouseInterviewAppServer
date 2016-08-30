import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import NotificationSystem from 'react-notification-system'

import LinearProgress from 'material-ui/LinearProgress'
import { List } from 'material-ui/List'

import Actions from '../Actions/Creators'

import Title from '../Components/Title'
import Interview from '../Components/Interview'

export class QuestionsPage extends Component {

  // constructor (props) {
  //   super(props)
  // }

  componentWillMount () {
    const { user, changeRoute, requestInterviews } = this.props
    if (!user) {
      changeRoute('/login')
    } else {
      requestInterviews()
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

  _renderInterviews = () => {
    const { interviews, interviewsById } = this.props
    if (!interviews) return
    return (
      <List>
        {interviews.map(interview => <Interview {...interviewsById[interview]} />)}
      </List>
    )
  }

  render () {
    const { fetching } = this.props
    return (
      <div>
        <Helmet
          title='Interviews'
          meta={[
            { name: 'description', content: 'Completed Interviews' }
          ]}
        />
        <NotificationSystem ref='notificationSystem' />
        {fetching ? <LinearProgress /> : null}
        <Title>Interviews</Title>
        {this._renderInterviews()}
      </div>
    )
  }
}
QuestionsPage.propTypes = {
  // changeRoute: React.PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    fetching: state.control.fetching,
    success: state.control.success,
    error: state.control.error,
    user: state.user.info,
    interviews: state.interviews.all,
    interviewsById: state.interviews.byId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeRoute: (url) => dispatch(push(url)),
    requestInterviews: () => dispatch(Actions.requestInterviews())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage)
