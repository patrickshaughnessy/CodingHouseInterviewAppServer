'use strict';

module.exports = {
  mongo: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost/InterviewApp-prod'
  },

  server: {
    port: process.env.PORT || 8080
  },

  codinghouse: {
    auth_token_url: 'https://codinghouse.co/auth/local',
    user_info_url: 'https://codinghouse.co/api/users/me',
    users_url: 'https://codinghouse.co/api/users'
  }
}
