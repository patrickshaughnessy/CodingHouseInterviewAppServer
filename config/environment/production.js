'use strict'

module.exports = {
  mongo: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost/InterviewApp-prod'
  },

  server: {
    port: process.env.PORT || 8080
  },

  // set CodingHouse API urls with config vars for heroku app
  codinghouse: {
    auth_token_url: process.env.CH_AUTH_TOKEN_URL || 'https://codinghouse.co/auth/local',
    user_info_url: process.env.CH_USER_INFO_URL || 'https://codinghouse.co/api/users/me',
    users_url: process.env.CH_USERS_URL || 'https://codinghouse.co/api/users'
  },

  secrets: {
    session: process.env.SESSION_SECRET || 'codinghouse-secret'
  }
}
