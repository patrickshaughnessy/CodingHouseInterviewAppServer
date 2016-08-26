// Needed for redux-saga es6 generator support
import 'babel-polyfill'

/* eslint-disable import/no-unresolved */
// // Load the favicon, the manifest.json file and the .htaccess file
// import 'file?name=[name].[ext]!./favicon.ico'
// import '!file?name=[name].[ext]!./manifest.json'
// import 'file?name=[name].[ext]!./.htaccess'
/* eslint-enable import/no-unresolved */

// Import all the third party stuff
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyRouterMiddleware, Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import useScroll from 'react-router-scroll'
import configureStore from './Store'
import Actions from './Actions/Creators'

// // Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// // the index.html file and this observer)
// import styles from 'containers/App/styles.css'
// const openSansObserver = new FontFaceObserver('Open Sans', {})
//
// // When Open Sans is loaded, add a font-family using Open Sans to the body
// openSansObserver.load().then(() => {
//   document.body.classList.add(styles.fontLoaded)
// }, () => {
//   document.body.classList.remove(styles.fontLoaded)
// })

const initialState = {}
const store = configureStore(initialState, browserHistory)

store.dispatch(Actions.startup())

if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  window.devToolsExtension.updateStore(store)
}

const history = syncHistoryWithStore(browserHistory, store)

// Set up the router, wrapping all Routes in the App component
import App from 'Containers/App'
import createRoutes from './Navigation'
const routes = {
  component: App,
  childRoutes: createRoutes(store)
}

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router
        history={history}
        routes={routes}
        render={
          applyRouterMiddleware(useScroll())
        }
      />
    </Provider>,
    document.getElementById('app')
  )
}

render()

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
// import { install } from 'offline-plugin/runtime'
// install()
