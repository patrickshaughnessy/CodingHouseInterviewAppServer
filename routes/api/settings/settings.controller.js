'use strict';

const Settings = require('./settings.model'),
      debug = require('debug')('InterviewAppServer: settings')

exports.index = (req, res) => {
  Settings
    .find({})
    .lean()
    .exec((err, settings) => {
      return res.status(err ? 400 : 200).json(err || settings);
    })
}

exports.show = (req, res) => {
  Settings
    .findOne({user: req.params.id})
    .deepPopulate('categories.category categories.questions categories.questions.category')
    .lean()
    .exec((err, settings) => {
      if (err || !settings) return handleError(res, err, {statusCode: 400, message: 'No settings found - please update your interview app profile'})
      return res.status(200).json(settings);
    })
}

exports.create = (req, res) => {
  Settings.create(req.body, (err, settings) => {
    return res.status(err ? 400 : 200).json(err || settings);
  })
}

exports.update = (req, res) => {
  Settings.findOneAndUpdate({ user: req.params.id }, req.body, 'new', (err, settings) => {
    return res.status(err ? 400 : 200).json(err || settings);
  });
}

exports.delete = (req, res) => {
  Settings.findOneAndRemove({ user: req.params.id }, (err, removed) => {
    return res.status(err ? 400 : 200).json(err || 'deleted!');
  })
}

function handleError(res, err, response) {
  if (err) return res.status(500).send(err);
  let {statusCode, message } = response;
  debug(`
    Error in settings with status code:${statusCode},
    Message: ${message}
    `);
  return res.status(statusCode).send({ message });
}
