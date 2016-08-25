import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import CircularProgress from 'material-ui/CircularProgress'

import styles from './Styles/HomePageStyle.css'

class HomePage extends Component {

  render () {
    return (
      <div style={{fontFamily: this.context.muiTheme}}>
        <Helmet
          title='Home'
          meta={[
            { name: 'description', content: 'Home Page for the Coding House Interview App' }
          ]}
        />
        <div className={styles.container}>
          <CircularProgress />
          <h1>Home Page</h1>
        </div>
      </div>
    )
  }
}

HomePage.propTypes = {
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
