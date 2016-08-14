/*
 *
 * List all the features
 */
import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Helmet from 'react-helmet'

import messages from './messages'
import { FormattedMessage } from 'react-intl'
import Button from 'components/Button'
import H1 from 'components/H1'

import { createStructuredSelector } from 'reselect'

import {
  selectFetching,
  selectError,
  selectSettings
} from './selectors'

import { requestSettings } from './actions'

// import styles from './styles.css'

export class SettingsPage extends React.Component {

  componentDidMount () {
    const { onMount } = this.props
    onMount()
  }
  /**
   * Changes the route
   *
   * @param  {string} route The route we want to go to
   */
  openRoute = (route) => {
    this.props.changeRoute(route)
  };

  /**
   * Changed route to '/'
   */
  openHomePage = () => {
    this.openRoute('/')
  };

  render () {
    return (
      <div>
        <Helmet
          title='Settings'
          meta={[
            { name: 'description', content: 'Change settings for your interview' }
          ]}
        />
        <H1>
          Settings
        </H1>
        <Button handleRoute={this.openHomePage}>
          <FormattedMessage {...messages.homeButton} />
        </Button>
      </div>
    )
  }
}
SettingsPage.propTypes = {
  changeRoute: React.PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  settings: selectSettings(),
  fetching: selectFetching(),
  error: selectError()
})

function mapDispatchToProps (dispatch) {
  return {
    onMount: () => dispatch(requestSettings()),
    changeRoute: (url) => dispatch(push(url)),

    dispatch
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage)
