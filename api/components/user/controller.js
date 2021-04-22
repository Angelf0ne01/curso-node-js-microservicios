const { nanoid } = require("nanoid");
const auth = require("../auth");

const table = "users";

module.exports = (injectedStore) => {
  const store = injectedStore || require("./../../../store/dummy");
  const list = async () => {
    return store.list(table);
  };

  const get = async (id) => {
    return store.get(table, id);
  };

  const upsert = async ({ name, username, id, password }) => {
    const user = {
      name,
      username,
      id: id || nanoid(),
    };
    if (password || username) {
      await auth
        .upsert({ password, ...user })
        .then((data) => console.log("auth", data))
        .catch((err) => console.log("err", err));
    }
    return store.upsert(table, user);
  };

  const follow = async (user_from, user_to) => {
    return store.upsert("user" + "_follow", {
      user_from,
      user_to,
    });
  };

  const following = async (user) => {
    const join = {};
    join[table] = "user_to";
    const query = {
      user_from: user,
    };
    return store.query("user" + "_follow", query, join);
  };

  return { list, get, upsert, follow, following };
};
