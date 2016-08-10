'use strict';

const Question = require('./question.model')

exports.index = (req, res) => {
  Question
    .find({})
    .lean()
    .exec((err, questions) => {
      return res.status(err ? 400 : 200).json(err || questions);
    })
}

exports.create = (req, res) => {
  Question.create(req.body, (err, question) => {
    return res.status(err ? 400 : 200).json(err || question);
  })
}

exports.update = (req, res) => {
  Question.findByIdAndUpdate(req.body._id, req.body, 'new', (err, question) => {
    return res.status(err ? 400 : 200).json(err || question);
  });
}

exports.delete = (req, res) => {
  Question.findByIdAndRemove(req.params.id, (err, removed) => {
    return res.status(err ? 400 : 200).json(err || 'deleted!');
  })
}
