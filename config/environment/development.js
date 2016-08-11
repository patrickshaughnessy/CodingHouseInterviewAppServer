'use strict';

module.exports = {
  mongo: {
    uri: 'mongodb://localhost/InterviewApp-dev'
  },

  server: {
    port: 1337
  },

  codinghouse: {
    auth_token_url: 'https://chonboarding.herokuapp.com/auth/local',
    user_info_url: 'https://chonboarding.herokuapp.com/api/users/me',
    users_url: 'https://chonboarding.herokuapp.com/api/users'
  }
}
