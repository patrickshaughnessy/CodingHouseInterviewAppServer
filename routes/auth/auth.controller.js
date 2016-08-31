'use strict'

require('rootpath')()
const request = require('request')
const debug = require('debug')('InterviewAppServer: routes/auth')
const { codinghouse } = require('config/environment')

exports.authenticate = (req, res, next) => {
  request.post({
    url: codinghouse.auth_token_url,
    body: req.body,
    json: true
  }, (err, response, authToken) => {
    if (!err && response.statusCode === 200) {
      let { token } = authToken
      request.get(codinghouse.user_info_url, (err, response, user) => {
        if (!err && response.statusCode === 200) {
          return res.status(200).json({user, token})
        } else {
          return handleError(res, err, response)
        }
      }).auth(null, null, true, token)
    } else {
      return handleError(res, err, response)
    }
  })
}

exports.user = (req, res, next) => {
  let { token } = req.body
  request.get(codinghouse.user_info_url, (err, response, user) => {
    if (!err && response.statusCode === 200) {
      return res.status(200).json({user, token})
    } else {
      return handleError(res, err, response)
    }
  }).auth(null, null, true, token)
}

function handleError (res, err, response) {
  if (err) return res.status(500).send(err)
  let { statusCode, body: { message } } = response
  debug(`
    Error authenticating with status code: ${statusCode},
    Message: ${message}
    `)
  return res.status(statusCode).send({ message })
}
