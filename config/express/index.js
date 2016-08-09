'use strict';

const express = require('express'),
      debug = require('debug')('InterviewAppServer: express'),
      morgan = require('morgan'),
      compression = require('compression'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      mongoose = require('mongoose');

module.exports = function(app) {
  const env = app.get('env');

  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(morgan('dev'));

};
