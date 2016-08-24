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
import '../reset.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import NavBar from './NavBar'

import styles from './Styles/AppStyle.css'

import {
cyan500, cyan700,
grey100, grey300, grey400, grey500,
pinkA200,
white, darkBlack, fullBlack
} from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator'

const chTheme = {
  spacing: {
    iconSize: 24,
    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 64,
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopDrawerMenuItemHeight: 48,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 56
  },
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
  }
};

function App (props) {
  return (
    <MuiThemeProvider
      muiTheme={getMuiTheme(chTheme)}
    >
      <div className={styles.global}>
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
