require('dotenv').config()

module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT || "secret",
  },
  mysql: {
    host:process.env.MYSQL_HOST,
    port:process.env.MYSQL_PORT,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE,
  },
};
