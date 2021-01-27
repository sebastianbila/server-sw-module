const { ValidationError } = require('express-validation')
const { BaseError } = require('../errors')
const { internalServerError, badRequest, baseResponse } = require('../responses')
const { CONTENT_TYPE, HTTP_CODE } = require('../consts')
const ResponseErrorModel = require('./helperModels/responseErrorModel')

function baseErrorMiddleware(err, req, res, next) {
  const badRequestCode = HTTP_CODE.BAD_REQUEST
  const internalServerCode = HTTP_CODE.INTERNAL_SERVER_ERROR
  if (err instanceof BaseError) {
    baseResponse(
      res, err.statusCode,
      new ResponseErrorModel(err.statusCode, err.details.body.map((x) => x.message)),
      CONTENT_TYPE.DATA
    )
  } else if (err instanceof ValidationError) {
    badRequest(
      res,
      new ResponseErrorModel(badRequestCode.details.body.map((x) => x.message)),
      CONTENT_TYPE.DATA
    )
  } else {
    internalServerError(
      res,
      new ResponseErrorModel(internalServerCode, err.message),
      CONTENT_TYPE.DATA
    )
  }
}

module.exports = baseErrorMiddleware
