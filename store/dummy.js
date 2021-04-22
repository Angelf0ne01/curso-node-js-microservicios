const db = {
  auth: [],
  order: [],
  user_roles: [],
  user: [
    {
      id: 1,
      name: "Carlos",
    },
    {
      id: 2,
      name: "Angel",
    },
  ],
};

const list = async (table) => {
  return db[table];
};
const get = async (table, id) => {
  const collection = await list(table);
  return collection.filter((item) => item.id == id);
};
const upsert = async (table, data) => {
  if (!db[table]) db[table] = [];
  db[table].push(data);
  console.log(db);
};
const remove = async (table, id) => {
  return true;
};

const query = async (table, q) => {
  const collection = await list(table);
  let keys = Object.keys(q);
  let key = keys[0];

  return collection.filter((item) => item[key] === q[key])[0] || null;
};

module.exports = {
  list,
  get,
  upsert,
  remove,
  query,
};
