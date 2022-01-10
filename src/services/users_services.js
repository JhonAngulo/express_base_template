'use strict'

const USERS = require('../mocks/USERS_MOCK_DATA.json')

class UserService {
  constructor () {
    this.table = USERS
  }

  async get () {
    const users = this.table
    return users || []
  }
}

module.exports = UserService
