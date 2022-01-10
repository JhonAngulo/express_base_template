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
  const user = await userService.getById({ id })
  Object.keys(user).length
    ? response.success({ req, res, message: 'User info', data: user })
    : response.error({ req, res, message: `user with the id ${id} was not found`, status: 404, data: {} })
})

router.post('/', async (req, res) => {
  const { first_name, last_name, email, gender } = req.body
  if (first_name && last_name && email && gender) {
    const user = await userService.create({ first_name, last_name, email, gender })
    response.success({ req, res, message: 'User created', data: user, status: 201 })
  } else {
    response.error({ req, res, message: 'Error creating user' })
  }
})

router.put('/:id', async (req, res) => {
  const { first_name, last_name, email, gender } = req.body
  const { id } = req.params

  if (first_name && last_name && email && gender) {
    const userUpdate = await userService.update({ first_name, last_name, email, gender, id })
    response.success({ req, res, message: 'User updated', data: userUpdate })
  } else {
    response.error({ req, res, message: 'Error updating user' })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const userId = await userService.delete({ id })
  response.success({ req, res, message: `User with id ${userId} was deleted` })
})

module.exports = router
