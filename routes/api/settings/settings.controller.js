'use strict';

const Settings = require('./settings.model')

exports.index = (req, res) => {
  Settings
    .find({})
    .lean()
    .exec((err, settings) => {
      return res.status(err ? 400 : 200).json(err || settings);
    })
}

exports.create = (req, res) => {
  Settings.create(req.body, (err, settings) => {
    return res.status(err ? 400 : 200).json(err || settings);
  })
}

exports.update = (req, res) => {
  Settings.findByIdAndUpdate(req.body._id, req.body, 'new', (err, settings) => {
    return res.status(err ? 400 : 200).json(err || settings);
  });
}

exports.delete = (req, res) => {
  Settings.findByIdAndRemove(req.params.id, (err, removed) => {
    return res.status(err ? 400 : 200).json(err || 'deleted!');
  })
}
