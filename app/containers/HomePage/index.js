/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Helmet from 'react-helmet'

import { createStructuredSelector } from 'reselect'

import styles from './styles.css'

export class HomePage extends React.Component {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount () {

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

  render () {
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
            <h2>HOME PAGSSSE</h2>
          </section>
        </div>
      </article>
    )
  }
}

HomePage.propTypes = {
  changeRoute: React.PropTypes.func
}

function mapDispatchToProps (dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url))
  }
}

const mapStateToProps = createStructuredSelector({

})

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
