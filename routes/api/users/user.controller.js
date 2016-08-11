'use strict';

require('rootpath')()
const request = require('request'),
      debug = require('debug')('InterviewAppServer: users'),
      { codinghouse } = require('config/environment');

exports.index = (req, res, next) => {

  let { token } = req.body

  request.get(codinghouse.users_url, (err, response, users) => {
    if (!err && response.statusCode === 200) {
      return res.status(200).json({users})
    } else {
      return handleError(res, err, response);
    }
  }).auth(null, null, true, token);

}

function handleError(res, err, response) {
  if (err) return res.status(500).send(err);
  let {statusCode, body: { message } } = response;

  if (statusCode === 401) {
    message = 'UnauthorizedError: No authorization token was found'
  }

  debug(`
    Error fetching users with status code:${statusCode},
    Message: ${message}
    `);
  return res.status(statusCode).send({ message });
}
