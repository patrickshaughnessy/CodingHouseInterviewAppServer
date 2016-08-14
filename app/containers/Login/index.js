/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Helmet from 'react-helmet'

// import messages from './messages'
import { createStructuredSelector } from 'reselect'

import {
  selectEmail,
  selectPassword,
  selectAttempting,
  selectUser,
  selectError
} from './selectors'

import { changeEmail, changePassword, login } from './actions'

// import { FormattedMessage } from 'react-intl'
import Button from 'components/Button'
import H2 from 'components/H2'
import List from 'components/List'
import ListItem from 'components/ListItem'
import LoadingIndicator from 'components/LoadingIndicator'

import styles from './styles.css'

export class HomePage extends React.Component {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount () {
    // if (this.props.username && this.props.username.trim().length > 0) {
    //   this.props.onSubmitForm()
    // }
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
   * Changed route to '/features'
   */
  openSettingsPage = () => {
    this.openRoute('/settings')
  };

  _onSubmitForm = (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault()
    const { email, password, login } = this.props
    login({ email, password })
  }

  render () {
    let mainContent = null

    // Show a loading indicator when we're loading
    if (this.props.attempting) {
      mainContent = (<List component={LoadingIndicator} />)

    // Show an error if there is one
    } else if (this.props.error) {
      const ErrorComponent = () => (
        <ListItem item={'Something went wrong, please try again!'} />
      )
      mainContent = (<List component={ErrorComponent} />)

    // If we're not loading, don't have an error and there are repos, show the repos
    } else if (this.props.user) {
      const UserComponent = () => (
        <ListItem item={`Welcome ${this.props.user.get('name')}!`} />
      )
      mainContent = (
        <div>
          <List component={UserComponent} />
          <Button handleRoute={this.openSettingsPage}>
            Settings
          </Button>
        </div>
      )
    }

    const { email, password, onChangeEmail, onChangePassword } = this.props

    return (
      <article>
        <Helmet
          title='Home'
          meta={[
            { name: 'description', content: 'The Home Page for the Coding House Interview App' }
          ]}
        />
        <div>
          <section className={`${styles.textSection} ${styles.centered}`}>
            <H2>LOGIN PAGE</H2>
          </section>
          <section className={styles.textSection}>
            <H2>LOGIN</H2>
            <form className={styles.loginForm} onSubmit={this._onSubmitForm}>
              <label htmlFor='email'>
                Email
              </label>
              <input
                id='email'
                className={styles.input}
                type='text'
                placeholder='admin'
                value={email}
                onChange={onChangeEmail}
              />
              <label htmlFor='password'>
                Password
              </label>
              <input
                id='password'
                className={styles.input}
                type='password'
                value={password}
                onChange={onChangePassword}
              />
              <Button onClick={this._onSubmitForm}>
                Submit
              </Button>
            </form>
            {mainContent}
          </section>
        </div>
      </article>
    )
  }
}

HomePage.propTypes = {
  changeRoute: React.PropTypes.func,
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool
  ]),
  email: React.PropTypes.string,
  password: React.PropTypes.string,
  onChangeEmail: React.PropTypes.func,
  onChangePassword: React.PropTypes.func,
  login: React.PropTypes.func,
  user: React.PropTypes.object
}

function mapDispatchToProps (dispatch) {
  return {
    onChangeEmail: (evt) => dispatch(changeEmail(evt.target.value)),
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
    changeRoute: (url) => dispatch(push(url)),
    login: (user) => dispatch(login(user)),

    dispatch
  }
}

const mapStateToProps = createStructuredSelector({
  email: selectEmail(),
  password: selectPassword(),
  user: selectUser(),
  attempting: selectAttempting(),
  error: selectError()
})

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
