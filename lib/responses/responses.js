const baseResponse = require('./baseResponse')
const { HTTP_CODE } = require('../consts')

const continuee = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.CONTINUE, data, contentType)
}
const switchingProtocols = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.SWITCHING_PROTOCOLS, data, contentType)
}
const processing = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.PROCESSING, data, contentType)
}
const ok = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.OK, data, contentType)
}
const created = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.CREATED, data, contentType)
}
const accepted = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.ACCEPTED, data, contentType)
}
const nonAuthoritativeInformation = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.NON_AUTHORITATIVE_INFORMATION, data, contentType)
}
const noContent = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.NO_CONTENT, data, contentType)
}
const resetContent = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.RESET_CONTENT, data, contentType)
}
const partialContent = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.PARTIAL_CONTENT, data, contentType)
}
const multiStatus = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.MULTI_STATUS, data, contentType)
}
const alreadyReported = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.ALREADY_REPORTED, data, contentType)
}
const imUsed = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.IM_USED, data, contentType)
}
const multipleChoices = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.MULTIPLE_CHOICES, data, contentType)
}
const movedPermanently = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.MOVED_PERMANENTLY, data, contentType)
}
const found = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.FOUND, data, contentType)
}
const seeOther = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.SEE_OTHER, data, contentType)
}
const notModified = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.NOT_MODIFIED, data, contentType)
}
const useProxy = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.USE_PROXY, data, contentType)
}
const temporaryRedirect = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.TEMPORARY_REDIRECT, data, contentType)
}
const permanentRedirect = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.PERMANENT_REDIRECT, data, contentType)
}
const badRequest = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.BAD_REQUEST, data, contentType)
}
const unauthorized = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.UNAUTHORIZED, data, contentType)
}
const paymentRequired = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.PAYMENT_REQUIRED, data, contentType)
}
const forbidden = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.FORBIDDEN, data, contentType)
}
const notFound = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.NOT_FOUND, data, contentType)
}
const methodNotAllowed = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.METHOD_NOT_ALLOWED, data, contentType)
}
const notAcceptable = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.NOT_ACCEPTABLE, data, contentType)
}
const proxyAuthenticationRequired = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.PROXY_AUTHENTICATION_REQUIRED, data, contentType)
}
const requestTimeout = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.REQUEST_TIMEOUT, data, contentType)
}
const conflict = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.CONFLICT, data, contentType)
}
const gone = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.GONE, data, contentType)
}
const lengthRequired = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.LENGTH_REQUIRED, data, contentType)
}
const preconditionFailed = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.PRECONDITION_FAILED, data, contentType)
}
const payloadTooLarge = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.PAYLOAD_TOO_LARGE, data, contentType)
}
const requestURITooLong = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.REQUEST_URI_TOO_LONG, data, contentType)
}
const unsupportedMediaType = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.UNSUPPORTED_MEDIA_TYPE, data, contentType)
}
const requestedRangeNotSatisfiable = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.REQUESTED_RANGE_NOT_SATISFIABLE, data, contentType)
}
const expectationFailed = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.EXPECTATION_FAILED, data, contentType)
}
const imateapot = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.IM_A_TEAPOT, data, contentType)
}
const misdirectedRequest = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.MISDIRECTED_REQUEST, data, contentType)
}
const unprocessableEntity = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.UNPROCESSABLE_ENTITY, data, contentType)
}
const locked = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.LOCKED, data, contentType)
}
const failedDependency = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.FAILED_DEPENDENCY, data, contentType)
}
const upgradeRequired = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.UPGRADE_REQUIRED, data, contentType)
}
const preconditionRequired = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.PRECONDITION_REQUIRED, data, contentType)
}
const tooManyRequests = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.TOO_MANY_REQUESTS, data, contentType)
}
const requestHeaderFieldsTooLarge = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.REQUEST_HEADER_FIELDS_TOO_LARGE, data, contentType)
}
const connectionClosedWithoutResponse = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.CONNECTION_CLOSED_WITHOUT_RESPONSE, data, contentType)
}
const unavailableForLegalReasons = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.UNAVAILABLE_FOR_LEGAL_REASONS, data, contentType)
}
const clientClosedRequest = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.CLIENT_CLOSED_REQUEST, data, contentType)
}
const internalServerError = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.INTERNAL_SERVER_ERROR, data, contentType)
}
const notImplemented = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.NOT_IMPLEMENTED, data, contentType)
}
const badGateway = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.BAD_GATEWAY, data, contentType)
}
const serviceUnavailable = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.SERVICE_UNAVAILABLE, data, contentType)
}
const gatewayTimeout = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.GATEWAY_TIMEOUT, data, contentType)
}
const httpVersionNotSupported = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.HTTP_VERSION_NOT_SUPPORTED, data, contentType)
}
const variantAlsoNegotiates = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.VARIANT_ALSO_NEGOTIATES, data, contentType)
}
const insufficientStorage = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.INSUFFICIENT_STORAGE, data, contentType)
}
const loopDetected = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.LOOP_DETECTED, data, contentType)
}
const notExtended = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.NOT_EXTENDED, data, contentType)
}
const networkAuthenticationRequired = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.NETWORK_AUTHENTICATION_REQUIRED, data, contentType)
}
const networkConnectTimeoutError = (res, data, contentType) => {
  return baseResponse(res, HTTP_CODE.NETWORK_CONNECT_TIMEOUT_ERROR, data, contentType)
}

module.exports = {
  baseResponse,
  continuee,
  switchingProtocols,
  processing,
  ok,
  created,
  accepted,
  nonAuthoritativeInformation,
  noContent,
  resetContent,
  partialContent,
  multiStatus,
  alreadyReported,
  imUsed,
  multipleChoices,
  movedPermanently,
  found,
  seeOther,
  notModified,
  useProxy,
  temporaryRedirect,
  permanentRedirect,
  badRequest,
  unauthorized,
  paymentRequired,
  forbidden,
  notFound,
  methodNotAllowed,
  notAcceptable,
  proxyAuthenticationRequired,
  requestTimeout,
  conflict,
  gone,
  lengthRequired,
  preconditionFailed,
  payloadTooLarge,
  requestURITooLong,
  unsupportedMediaType,
  requestedRangeNotSatisfiable,
  expectationFailed,
  imateapot,
  misdirectedRequest,
  unprocessableEntity,
  locked,
  failedDependency,
  upgradeRequired,
  preconditionRequired,
  tooManyRequests,
  requestHeaderFieldsTooLarge,
  connectionClosedWithoutResponse,
  unavailableForLegalReasons,
  clientClosedRequest,
  internalServerError,
  notImplemented,
  badGateway,
  serviceUnavailable,
  gatewayTimeout,
  httpVersionNotSupported,
  variantAlsoNegotiates,
  insufficientStorage,
  loopDetected,
  notExtended,
  networkAuthenticationRequired,
  networkConnectTimeoutError
}
