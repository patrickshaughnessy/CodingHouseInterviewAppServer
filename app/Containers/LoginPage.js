import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Helmet from 'react-helmet'

import Actions from '../Actions/Creators'

// import styles from './styles.css'

class LoginPage extends Component {

  componentDidMount () {

  }

  render () {
    return (
      <article>
        <Helmet
          title='Login'
          meta={[
            { name: 'description', content: 'Login for the Coding House Interview App' }
          ]}
        />
        <div>
          <h2>LOGIN PAGE</h2>
          <button onClick={this.props.login}>Login</button>
        </div>
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
    login: () => dispatch(Actions.login('admin@admin.com', 'admin'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
