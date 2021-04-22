const express = require("express");
const router = express.Router();
const response = require("./../../../network/response");
const controller = require("./index");
const secure = require("./secure");


router.get("/", list);
router.post("/follow/:id",secure("follow"), follow);
router.get("/:id/following", following);
router.get("/:id", get);
router.post("/", upsert);
router.put("/", secure("update"), upsert);

function list(req, resp, next) {
  controller
    .list()
    .then((list) => response.success(req, resp, list))
    .catch(next);
}

function get(req, resp, next) {
  controller
    .get(req.params.id)
    .then((user) => response.success(req, resp, user))
    .catch(next);
}

function upsert(req, resp, next) {
  controller
    .upsert(req.body)
    .then((user) => response.success(req, resp, user))
    .catch(next);
}

function follow(req, resp, next) {
  controller
    .follow(req.user.id, req.params.id)
    .then((user) => response.success(req, resp, user))
    .catch(next);
}

function following(req, resp, next) {
  controller
    .following(req.params.id)
    .then((user) => response.success(req, resp, user))
    .catch(next);
}

module.exports = router;
