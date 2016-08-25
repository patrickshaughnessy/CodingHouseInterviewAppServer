import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import NotificationSystem from 'react-notification-system'

import LinearProgress from 'material-ui/LinearProgress'

import Actions from '../Actions/Creators'

import CategorySelection from './CategorySelection'
import QuestionsList from './QuestionsList'
import AddQuestion from './AddQuestion'

export class QuestionsPage extends Component {

  // constructor (props) {
  //   super(props)
  // }

  componentWillMount () {
    // const { user, changeRoute } = this.props
    // if (!user) {
    //   changeRoute('/login')
    // }
  }

  componentDidMount () {
    const { requestQuestions } = this.props
    requestQuestions()
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
          title='Questions'
          meta={[
            { name: 'description', content: 'A list of available questions for interviews' }
          ]}
        />
        <NotificationSystem ref='notificationSystem' />
        {fetching ? <LinearProgress /> : null}
        <CategorySelection />
        <QuestionsList />
        <AddQuestion />
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
    error: state.control.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestQuestions: () => dispatch(Actions.requestQuestions()),
    requestCategories: () => dispatch(Actions.requestCategories()),
    changeViewing: (categoryID) => dispatch(Actions.changeViewing(categoryID)),
    editLevel: (payload) => dispatch(Actions.editLevel(payload)),
    changeRoute: (url) => dispatch(push(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage)
