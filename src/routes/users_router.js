'use strict'

const router = require('express').Router()
const response = require('../response_manager')
const UserService = require('../services/users_services')
const userService = new UserService()

router.get('/', async (req, res) => {
  const users = await userService.getAll()
  response.success({ req, res, message: 'Users List', data: users })
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const user = await userService.getById({ id: parseInt(id) })
  response.success({ req, res, message: 'User info', data: user })
})

router.post('/', async (req, res) => {
  const { first_name, last_name, email, gender } = req.body
  if (first_name && last_name && email && gender) {
    const user = await userService.create({ first_name, last_name, email, gender })
    response.success({ req, res, message: 'User created', data: user })
  } else {
    response.error({ req, res, message: 'Error creating user' })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const userId = await userService.delete({ id: parseInt(id) })
  response.success({ req, res, message: `User with id ${userId} was deleted` })
})

module.exports = router
