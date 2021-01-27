const BaseError = require('./baseError')

class InternalServerError extends BaseError {
  constructor(message)  {
    super(message, 'InternalServerError', 500)
  }
}

module.exports = InternalServerError
