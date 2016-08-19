import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import styles from './Styles/NavBarStyle.css'

const NavBar = (props) => {
  const { changeRoute } = props
  return (
    <div className={styles.menu}>
      <div className='pure-menu'>
        <a className='pure-menu-heading' href='#'>Coding House</a>

        <ul className='pure-menu-list'>
          <li className='pure-menu-item'><a href='#' className='pure-menu-link'>Home</a></li>
          <li className='pure-menu-item'><a href='#' className='pure-menu-link'>Questions</a></li>

          <li className='pure-menu-item menu-item-divided pure-menu-selected'>
            <a href='#' className='pure-menu-link'>Settings</a>
          </li>

          <li className='pure-menu-item'><a href='#' className='pure-menu-link'>Interviews</a></li>
        </ul>
      </div>
    </div>
  )
}

NavBar.propTypes = {

}

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps: ownProps
  }
}

function mapDispatchToProps (dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
