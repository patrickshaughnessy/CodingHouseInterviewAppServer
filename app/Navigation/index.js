const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err) // eslint-disable-line no-console
}

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default)
}

export default function createRoutes (store) {
  return [
    {
      path: '/',
      name: 'interviews',
      getComponent (nextState, cb) {
        System.import('Containers/InterviewsPage')
          .then(loadModule(cb))
          .catch(errorLoading)
      }
    },
    {
      path: '/login',
      name: 'login',
      getComponent (nextState, cb) {
        System.import('Containers/LoginPage')
          .then(loadModule(cb))
          .catch(errorLoading)
      }
    },
    {
      path: '/settings',
      name: 'settings',
      getComponent (nextState, cb) {
        System.import('Containers/SettingsPage')
          .then(loadModule(cb))
          .catch(errorLoading)
      }
    },
    {
      path: '/questions',
      name: 'questions',
      getComponent (nextState, cb) {
        System.import('Containers/QuestionsPage')
          .then(loadModule(cb))
          .catch(errorLoading)
      }
    }
    // {
    //   path: '*',
    //   name: 'notfound',
    //   getComponent (nextState, cb) {
    //     System.import('containers/NotFoundPage')
    //       .then(loadModule(cb))
    //       .catch(errorLoading)
    //   }
    // }
  ]
}
