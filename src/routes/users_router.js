'use strict'

const router = require('express').Router()
const UserService = require('../services/users_services')
const userService = new UserService()

router.get('/', async (req, res) => {
  const users = await userService.get()
  res.json({ data: users })
})

module.exports = router
