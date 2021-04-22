const express = require("express");
const router = express.Router();
const response = require("./../../../network/response");
const controller = require("./index");

router.post("/", login);

function login(req, resp,next) {
  controller
    .login(req.body)
    .then((data) => response.success(req, resp, data))
    .catch(next);
}

module.exports = router;
