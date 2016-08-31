'use strict'

var config = require('../config/environment')
var expressJwt = require('express-jwt')
var compose = require('composable-middleware')
var validateJwt = expressJwt({ secret: config.secrets.session })

exports.isAuthenticated = () => {
  return compose()
    .use(function (req, res, next) {
      if (req.query && req.query.hasOwnProperty('access_token')) {
        req.headers.authorization = 'Bearer ' + req.query.access_token
      }
      validateJwt(req, res, next)
    })
}
