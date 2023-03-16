function messageResponse(status, message, res, data) {
  return res.status(status).json({ status, message, ...(data && { data }) });
}

function onSuccess(message, res, data) {
  return messageResponse(200, message, res, data);
}

function created(message, res, data) {
  return messageResponse(201, message, res, data);
}

function onSuccessNoContent(message, res) {
  return messageResponse(204, message, res);
}

function badRequest(message, res) {
  return messageResponse(400, message, res);
}

function unauthorized(message, res) {
  return messageResponse(401, message, res);
}

function forbidden(message, res) {
  return messageResponse(403, message, res);
}

function notFound(message, res) {
  return messageResponse(404, message, res);
}

function internalServerError(message, res) {
  return messageResponse(500, message, res);
}

function serviceUnavailable(message, res) {
  return messageResponse(503, message, res);
}

module.exports = {
  onSuccess,
  created,
  onSuccessNoContent,
  badRequest,
  unauthorized,
  forbidden,
  notFound,
  internalServerError,
  serviceUnavailable,
};
