class ResponseErrorModel {
  constructor(statusCode, errors) {
    if (errors instanceof Array) {
      this.errors = errors
    } else {
      this.errors = [];
      this.errors.push(errors)
    }
  }
}

module.exports = ResponseErrorModel
