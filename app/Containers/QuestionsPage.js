import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import Actions from '../Actions/Creators'

import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'

import NewQuestionForm from '../Components/NewQuestionForm'

import CategorySelection from './CategorySelection'
import QuestionsList from './QuestionsList'

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
    const { requestQuestions, requestCategories } = this.props
    // requestCategories()
    requestQuestions()
  }

  render () {
    return (
      <div>
        <Helmet
          title='Questions'
          meta={[
            { name: 'description', content: 'A list of available questions for interviews' }
          ]}
        />
        <CategorySelection />
        <QuestionsList />
        {/* <QuestionsList
          questions={this._mapQuestionsToCategory()}
          />
          <Paper>
          <NewQuestionForm />
        </Paper> */}
      </div>
    )
  }
}
QuestionsPage.propTypes = {
  // changeRoute: React.PropTypes.func
}

const mapStateToProps = (state) => {
  return {
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
