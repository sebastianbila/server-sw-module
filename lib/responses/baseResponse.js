const { CONTENT_TYPE } = require('../consts')

function baseResponse(res, code, data, contentType = CONTENT_TYPE.JSON) {
  if (contentType === CONTENT_TYPE.DATA) {
    return res.send(data)
  }

  if (typeof data === 'string') {
    return res.status(code).json({ message: data })
  } else return res.status(code).json(data)
}

module.exports = baseResponse
