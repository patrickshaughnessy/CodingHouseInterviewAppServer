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
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'

import Footer from 'Components/Footer'
import NavBar from './NavBar'

import styles from './Styles/AppStyle.css'

function App (props) {
  return (
    <MuiThemeProvider>
      <div>
        <Helmet
          titleTemplate='%s - Interview App'
          defaultTitle='Coding House Interview App'
          meta={[
            { name: 'description', content: 'A baby front end for the Coding House Interview Mobile App' }
          ]}
        />
        <NavBar {...props} />
        {React.Children.toArray(props.children)}
      </div>
    </MuiThemeProvider>
  )
}

App.propTypes = {
  children: React.PropTypes.node
}

export default App
