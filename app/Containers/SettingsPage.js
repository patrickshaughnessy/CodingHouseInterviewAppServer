import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import NotificationSystem from 'react-notification-system'

import LinearProgress from 'material-ui/LinearProgress'

import Actions from '../Actions/Creators'

import CategoryTable from './CategoryTable'
import Title from '../Components/Title'
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
      const { requestSettings, requestQuestions } = this.props
      requestSettings(user)
      requestQuestions()
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
  _renderSettings = () => {
    const { settings, allQuestions, questionsById, categoriesById, levelsById } = this.props
    if (!settings || !allQuestions.length || !questionsById || !categoriesById) return
    return settings.map(setting => {
      const questions = allQuestions.filter(question => questionsById[question].category === setting.category)
      const settingsProps = {
        questions,
        questionsById,
        categoriesById,
        levelsById,
        category: categoriesById[setting.category],
        active: setting.questions
      }
      return <CategoryTable key={setting.category} {...settingsProps} />
    })
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
        <Title>Settings</Title>
        {this._renderSettings()}
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
    user: state.user.info,
    settings: state.settings.categories,
    questionsById: state.questions.byId,
    allQuestions: state.questions.all,
    categoriesById: state.categories.byId,
    levelsById: state.levels.byId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestSettings: (user) => dispatch(Actions.requestSettings(user)),
    requestQuestions: () => dispatch(Actions.requestQuestions()),
    changeRoute: (url) => dispatch(push(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage)
