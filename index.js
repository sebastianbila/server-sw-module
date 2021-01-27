const { responses } = require('./responses')
const responseAndStatuses = require('./responses')
const errors = require('./errors')
const middlewares = require('./middlewares')
const consts = require('./consts')

module.exports = {
  ...responses,
  responseAndStatuses,
  errors,
  middlewares,
  consts
}
