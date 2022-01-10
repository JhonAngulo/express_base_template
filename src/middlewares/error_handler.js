'use strict'

function logErrors (err, req, res, next) {
  // eslint-disable-next-line no-console
  console.error(err)
  next(err)
}

function errorHandler (err, req, res, next) {
  res.status(500).json({
    message: err.message,
    error: true,
    stack: err.stack
  })
}

module.exports = { logErrors, errorHandler }
