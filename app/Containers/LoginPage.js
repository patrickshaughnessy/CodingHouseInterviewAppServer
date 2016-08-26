import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { push } from 'react-router-redux'
import Helmet from 'react-helmet'

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import Actions from '../Actions/Creators'

import styles from './Styles/LoginPageStyle.css'

class LoginPage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      email: 'admin@admin.com',
      password: 'admin'
    }
  }

  _handleLogin = () => {
    const { email, password } = this.state
    if (!email || !password) return
    const { login } = this.props
    login({ email, password })
  }

  render () {
    const { email, password } = this.state
    return (
      <article>
        <Helmet
          title='Login'
          meta={[
            { name: 'description', content: 'Login for the Coding House Interview App' }
          ]}
        />
        <Paper className={styles.container}>
          <h1 className={styles.title}>Login</h1>
          <div className={styles.innerContainer}>
            <TextField
              type='text'
              name='email'
              floatingLabelText='Email'
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <TextField
              type='text'
              name='password'
              floatingLabelText='Password'
              value={password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <RaisedButton
              label='Login'
              primary
              onTouchTap={this._handleLogin}
            />
          </div>
        </Paper>
      </article>
    )
  }
}

LoginPage.propTypes = {

}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => dispatch(Actions.login(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
