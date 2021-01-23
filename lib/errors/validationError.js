const BaseError = require('./baseError')

class ValidationError extends BaseError {
  constructor(message)  {
    super(message, 'ValidationError', 500)
  }
}

module.exports = ValidationError
