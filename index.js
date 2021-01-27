const responses = require('./lib/responses')
const errors = require('./lib/errors')

module.exports = {
  ...responses,
  errors
}
