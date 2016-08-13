'use strict'

const Category = require('./category.model')

exports.index = (req, res) => {
  Category
    .find({})
    .lean()
    .exec((err, categories) => {
      return res.status(err ? 400 : 200).json(err || categories)
    })
}

exports.create = (req, res) => {
  Category.create(req.body, (err, category) => {
    return res.status(err ? 400 : 200).json(err || category)
  })
}

exports.update = (req, res) => {
  Category.findByIdAndUpdate(req.body._id, req.body, 'new', (err, category) => {
    return res.status(err ? 400 : 200).json(err || category)
  })
}

exports.delete = (req, res) => {
  Category.findByIdAndRemove(req.params.id, (err, removed) => {
    return res.status(err ? 400 : 200).json(err || 'deleted!')
  })
}
