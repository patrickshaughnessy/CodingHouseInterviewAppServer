/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'
import Helmet from 'react-helmet'

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css'
import 'purecss'

import Footer from 'Components/Footer'
import NavBar from './NavBar'

import styles from './Styles/AppStyle.css'

function App (props) {
  console.log(props)
  return (
    <div>
      <Helmet
        titleTemplate='%s - Interview App'
        defaultTitle='Coding House Interview App'
        meta={[
          { name: 'description', content: 'A baby front end for the Coding House Interview Mobile App' }
        ]}
      />
      {/* <NavBar {...props} />
        {React.Children.toArray(props.children)}
      <Footer /> */}

      <div className={styles.layout}>
        <a href='#menu' className={styles.menuLink}>
          <span></span>
        </a>

        <div className={styles.menu}>
          <div className='pure-menu'>
            <a className='pure-menu-heading' href='#'>Company</a>

            <ul className='pure-menu-list'>
              <li className='pure-menu-item'><a href='#' className='pure-menu-link'>Home</a></li>
              <li className='pure-menu-item'><a href='#' className='pure-menu-link'>About</a></li>

              <li className='pure-menu-item menuItemDivided pure-menu-selected'>
                <a href='#' className='pure-menu-link'>Services</a>
              </li>

              <li className='pure-menu-item'><a href='#' className='pure-menu-link'>Contact</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.header}>
            <h1>Page Title</h1>
            <h2>A subtitle for your page goes here</h2>
          </div>

          <div className={styles.content}>
            <h2 className={styles.contentSubhead}>How to use this layout</h2>
            <p>
              To use this layout, you can just copy paste the HTML, along with the CSS in <a href='/css/layouts/side-menu.css' alt='Side Menu CSS'>side-menu.css</a>, and the JavaScript in <a href='/js/ui.js'>ui.js</a>. The JS file uses vanilla JavaScript to simply toggle an <code>active</code> class that makes the menu responsive.
            </p>

            <h2 className={styles.contentSubhead}>Now Let's Speak Some Latin</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h2 className={styles.contentSubhead}>Try Resizing your Browser</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.node
}

export default App
