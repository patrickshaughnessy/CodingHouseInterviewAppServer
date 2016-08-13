'use strict'

const Interview = require('./interview.model')

exports.index = (req, res) => {
  Interview
    .find({})
    .lean()
    .exec((err, interviews) => {
      return res.status(err ? 400 : 200).json(err || interviews)
    })
}

exports.create = (req, res) => {
  Interview.create(req.body, (err, interview) => {
    return res.status(err ? 400 : 200).json(err || interview)
  })
}

exports.update = (req, res) => {
  Interview.findByIdAndUpdate(req.body._id, req.body, 'new', (err, interview) => {
    return res.status(err ? 400 : 200).json(err || interview)
  })
}

exports.delete = (req, res) => {
  Interview.findByIdAndRemove(req.params.id, (err, removed) => {
    return res.status(err ? 400 : 200).json(err || 'deleted!')
  })
}
