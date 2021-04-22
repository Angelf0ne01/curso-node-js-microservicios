const express = require("express");
const app = express();
const config = require("../config");
const router = require("./components/user/network");
const auth = require("./components/auth/network");
const post = require("./components/post/network");
const errors = require("./../network/error");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", router);
app.use("/api/auth", auth);
app.use("/api/post", post);

app.use(errors);
app.listen(config.api.port, () => {
  console.log(`Api corriendo en http://localhost:${config.api.port}`);
});
