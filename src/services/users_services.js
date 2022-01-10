'use strict'

const USERS = require('../mocks/USERS_MOCK_DATA.json')

class UserService {
  constructor () {
    this.table = USERS
  }

  async getAll () {
    const users = this.table
    return users || []
  }

  async getById ({ id }) {
    const user = this.table.filter(user => user.id === id)
    return user || []
  }

  async create ({ first_name, last_name, email, gender }) {
    const newUser = {
      id: this.table.length + 1,
      first_name,
      last_name,
      email,
      gender
    }
    this.table.push(newUser)
    return newUser || []
  }

  async delete ({ id }) {
    this.table = this.table.filter((user) => user.id !== id)
    return id
  }
}

module.exports = UserService
