'use strict'

require('rootpath')();
const cors = require('cors');

module.exports = function(app) {
  const env = app.get('env');

  app.options('*', cors());
  app.use(cors());

  // all public API routes

  app.use('/api/interviews', require('routes/api/interviews'));
  app.use('/auth', require('routes/auth'))

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  if (env === 'production') {
    app.use((err, req, res, next) => {
      res.status(err.status || 500);
      res.send({
        message: err.message,
        error: {}
      });
    })
  }

  if (env === 'development') {
    app.use((err, req, res, next) => {
      res.status(err.status || 500);
      res.send({
        message: err.message,
        error: err
      });
    });
  }
}
