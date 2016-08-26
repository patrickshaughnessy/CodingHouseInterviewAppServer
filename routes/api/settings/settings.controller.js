'use strict'

const Settings = require('./settings.model')
const debug = require('debug')('InterviewAppServer: routes/api/settings')

exports.index = (req, res) => {
  Settings
    .find({})
    .lean()
    .exec((err, settings) => {
      return res.status(err ? 400 : 200).json(err || settings)
    })
}

exports.show = (req, res) => {
  Settings
    .findOne({user: req.params.id})
    .deepPopulate('categories.category categories.questions categories.questions.category')
    .lean()
    .exec((err, settings) => {
      if (err || !settings) return handleError(res, err, {statusCode: 400, message: 'No settings found - please update your interview app profile'})
      return res.status(200).json(settings)
    })
}

exports.create = (req, res) => {
  Settings.create(req.body, (err, settings) => {
    return res.status(err ? 400 : 200).json(err || settings)
  })
}

exports.update = (req, res) => {
  Settings.findOne({ user: req.params.id }, (err, settings) => {
    if (err || !settings) return handleError(res, err, {statusCode: 400, message: 'No settings found - please update your interview app profile'})
    let { categories } = settings
    categories = categories.map(setting => {
      const { category, questions } = req.body
      if (setting.category.toString() === category) {
        setting.questions = questions
      }
      return setting
    })
    settings.save((err, savedSettings) => {
      return res.status(err ? 400 : 200).json(err || savedSettings)
    })
  })
}

exports.delete = (req, res) => {
  Settings.findOneAndRemove({ user: req.params.id }, (err, removed) => {
    return res.status(err ? 400 : 200).json(err || 'deleted!')
  })
}

function handleError (res, err, response) {
  if (err) return res.status(500).send(err)
  let { statusCode, message } = response
  debug(`
    Error in settings with status code:${statusCode},
    Message: ${message}
    `)
  return res.status(statusCode).send({ message })
}
