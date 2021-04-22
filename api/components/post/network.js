const express = require("express");
const router = express.Router();
const response = require("./../../../network/response");
const controller = require("./index");
const secure = require("./secure");

router.get("/:id", get);
router.get("/", list);
router.post("/",secure("logged"),upsert)
router.patch("/",secure("owner"),upsert)



function list(req, resp, next) {
  controller
    .list()
    .then((list) => response.success(req, resp, list))
    .catch(next);
}

function upsert(req,resp,next){
    controller
    .upsert(req.body,req.user.id)
    .then((list) => response.success(req, resp, list))
    .catch(next);
}

function get(req,resp,next){
    controller
    .get(req.params.id)
    .then((list) => response.success(req, resp, list))
    .catch(next);
}




//add post
//read post byId
//edit post 


module.exports = router;
