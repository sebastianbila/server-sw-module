const { HTTP_CODE, CONTENT_TYPE } = require('./lib/consts')
const { BaseError, InternalServerError, ValidationError } = require('./lib/errors')
const baseErrorMiddleware = require('./lib/middlewares/baseErrorMiddleware')
const responses = require('./lib/responses')

const consts = {
  HTTP_CODE,
  CONTENT_TYPE
}

const errors = {
  BaseError,
  InternalServerError,
  ValidationError
}

const middlewares = {
  baseErrorMiddleware,
}

module.exports = {
  consts,
  middlewares,
  errors,
  responses,
}

