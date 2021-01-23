const { HTTP_CODE, CONTENT_TYPE } = require('./lib/consts')
const { BaseError, InternalServerError, ValidationError } = require('./lib/errors')
const baseErrorMiddleware = require('./lib/middlewares/baseErrorMiddleware')
const responses = require('./lib/responses')

module.exports = {
  HTTP_CODE,
  CONTENT_TYPE,
  BaseError,
  InternalServerError,
  ValidationError,
  baseErrorMiddleware,
  ...responses
}
