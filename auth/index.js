const jwt = require("jsonwebtoken");
const config = require("./../config");
const secret = config.jwt.secret;
const error = require("./../utils/error");
const sign = (data) => jwt.sign(data, "secret");

const getToken = (auth) => {
  if (!auth || auth.indexOf("Bearer ") === -1) throw new Error("Token invalid");
  return auth.replace("Bearer ", "");
};

const verify = (token) => {
  return jwt.verify(token, secret);
};

const decodeHeader = (req) => {
  const authorization = req.headers.authorization || "";
  const token = getToken(authorization);
  const decoded = verify(token);
  console.log(decoded);
  req.user = decoded;
  return decoded;
};

const check = {
  own: (req, owner) => {
    const decoded = decodeHeader(req);
    console.log(decoded);
    if (decoded.id !== owner) throw error("no tienes permisos", 401);
  },
  logged:(req)=>decodeHeader(req)
};

module.exports = {
  sign,
  check,
};
