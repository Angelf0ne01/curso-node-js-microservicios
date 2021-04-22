const user = require("./api/components/user");

let db_user = {
  user: [
    {
      id: 1,
      nombre: "pepito",
    },
  ],
};

let user_update = {
  id: 1,
  nombre: "jose",
};

let user_new = {
  id: 123215421,
  nombre: "pepito",
};

db_user["user"].push(user_update)
console.log("actualizar usuario",db_user );
db_user["user"].push(user_new)
console.log("crear usuario", db_user);
