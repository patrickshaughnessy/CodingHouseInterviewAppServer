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

exports.show = (req, res) => {
  Settings
    .findOne({user: req.params.id})
    .lean()
    .exec((err, settings) => {
      console.log(err);
      return res.status(err ? 400 : 200).json(err || settings);
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
