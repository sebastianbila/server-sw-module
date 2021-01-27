const responses = require('./responses')
const errors = require('./errors')
const middlewares = require('./middlewares')
const consts = require('./consts')

module.exports = {
  ...responses,
  errors,
  middlewares,
  consts
}
