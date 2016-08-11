'use strict';

module.exports = {
  mongo: {
    uri: 'mongodb://localhost/InterviewApp-test'
  },

  server: {
    port: 3000
  },

  codinghouse: {
    auth_token_url: 'https://chonboarding.herokuapp.com/auth/local',
    user_info_url: 'https://chonboarding.herokuapp.com/api/users/me',
    user_search_url: 'https://chonboarding.herokuapp.com/api/users'
  }
}
