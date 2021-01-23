const { ValidationError } = require('express-validation')
const { BaseError } = require('../errors')
const ResponseErrorModel = require('./helperModels/responseErrorModel')
const { internalServerError, badRequest, baseResponse } = require('../responses')
const { CONTENT_TYPE } = require('../consts')

function baseErrorMiddleware(err, req, res, next) {
  if (err instanceof BaseError) {
    baseResponse(
      res, err.statusCode,
      new ResponseErrorModel(err.details.body.map((x) => x.message)),
      CONTENT_TYPE.DATA
    )
  } else if (err instanceof ValidationError) {
    badRequest(
      res,
      new ResponseErrorModel(err.details.body.map((x) => x.message)),
      CONTENT_TYPE.DATA
    )
  } else {
    internalServerError(res, new ResponseErrorModel(err.message), CONTENT_TYPE.DATA)
  }
}

module.exports = baseErrorMiddleware
