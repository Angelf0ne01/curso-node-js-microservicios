const auth = require("./../../../auth");
const bcrypt = require("bcrypt");
const TABLE = "auth";

module.exports = (injectedStore) => {
  const store = injectedStore || require("./../../../store/dummy");
  const upsert = async ({ id, username, password }) => {
    const autData = {
      id,
    };

    if (username) autData.username = username;
    if (password) autData.password = await bcrypt.hash(password, 5);

    return store.upsert(TABLE, autData);
  };

  const login = async ({ username, password }) => {
    const data = await store.query(TABLE, { username });
    let passwordCompare = await bcrypt.compare(password, data.password);    
    if (!passwordCompare) throw new Error("informacion invalida");
    return auth.sign(data);
  };

  return { upsert, login };
};
