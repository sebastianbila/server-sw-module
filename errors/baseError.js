class BaseError extends Error {
  constructor(message, name, statusCode) {
    super(message)
    this.name = name || 'Base Server Error'
    this.statusCode = statusCode || 500
  }
}

module.exports = BaseError
