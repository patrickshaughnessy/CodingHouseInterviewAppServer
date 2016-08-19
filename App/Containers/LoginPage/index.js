import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Helmet from 'react-helmet'

import styles from './styles.css'

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
          <section className={`${styles.textSection} ${styles.centered}`}>
            <h2>LOGIN PAGE</h2>
          </section>
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

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
