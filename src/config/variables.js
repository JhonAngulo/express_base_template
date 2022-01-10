'use strict'

require('dotenv').config()

module.exports = {
  system: {
    port: process.env.PORT
  },
  db: {
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD
  }
}
