'use strict'

const Question = require('./question.model')
const Category = require('../categories/category.model')
const debug = require('debug')('InterviewAppServer: routes/api/questions')

exports.index = (req, res) => {
  Question
    .find({})
    .populate('category')
    .lean()
    .exec((err, questions) => {
      if (err) return handleError(res, err)
      Category
        .find({})
        .lean()
        .exec((err, categories) => {
          if (err) return handleError(res, err)
          return res.status(200).json({questions, categories})
        })
    })
}

exports.create = (req, res) => {
  Question.create(req.body, (err, question) => {
    return res.status(err ? 400 : 200).json(err || question)
  })
}

exports.update = (req, res) => {
  Question.findByIdAndUpdate(req.body._id, req.body, 'new', (err, question) => {
    return res.status(err ? 400 : 200).json(err || question)
  })
}

exports.delete = (req, res) => {
  Question.findByIdAndRemove(req.params.id, (err, removed) => {
    return res.status(err ? 400 : 200).json(err || 'deleted!')
  })
}

function handleError (res, err, response) {
  if (err) return res.status(500).send(err)
  let { statusCode, message } = response
  debug(`
    Error in questions with status code:${statusCode},
    Message: ${message}
    `)
  return res.status(statusCode).send({ message })
}
