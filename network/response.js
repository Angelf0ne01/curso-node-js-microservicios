const success = (req, resp, message = "", status = 200) => {
  resp.status(status).send({
    error: false,
    status,
    body: message,
  });
};

const error = (req, resp, message = "Internal Error", status = 500) => {
  resp.status(status).send({
    error: true,
    status,
    message: message,
  });
};

module.exports = {
  success,
  error,
};
