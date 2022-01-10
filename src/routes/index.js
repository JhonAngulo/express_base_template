'use strict'

const router = require('express').Router()
const usersRouter = require('./users_router')

function routerApi (app) {
  // base API endpoints
  app.use('/api/v1', router)

  // API endpoints
  router.use('/users', usersRouter)
}

module.exports = routerApi
