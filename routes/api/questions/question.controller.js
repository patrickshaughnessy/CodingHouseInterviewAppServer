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

exports.show = (req, res) => {
  Question
    .find({ category: req.params.id })
    .lean()
    .exec((err, questions) => {
      if (err) return handleError(res, err)
      return res.status(200).json({ questions })
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
    return res.status(err ? 400 : 200).json(err || removed)
  })
}

exports.levels = {
  add: (req, res) => {
    Question.findByIdAndUpdate(
      req.body.questionID,
      {
        '$push': {
          'levels': req.body.level
        }
      },
      { new: true },
      (err, question) => {
        if (err) return handleError(res, err)
        return res.status(200).json(question)
      }
    )
  },
  edit: (req, res) => {
    Question.findOneAndUpdate(
      { 'levels._id': req.body._id },
      {
        '$set': {
          'levels.$': req.body.level
        }
      },
      { new: true },
      (err, question) => {
        if (err) return handleError(res, err)
        return res.status(200).json(question)
      }
    )
  },
  remove: (req, res) => {
    Question.findOneAndUpdate(
      { 'levels._id': req.params.levelID },
      {
        '$pull': {
          'levels': {
            '_id': req.params.levelID
          }
        }
      },
      { new: true },
      (err, question) => {
        if (err) return handleError(res, err)
        return res.status(200).json(question)
      }
    )
  }
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
