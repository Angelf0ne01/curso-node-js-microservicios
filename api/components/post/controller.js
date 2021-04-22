const table = "post";

module.exports = (injectedStore) => {
  const store = injectedStore || require("./../../../store/dummy");
  const list = async () => {
    return store.list(table);
  };

  const upsert = async (params, user) => {
    if (!params.text) throw new Error("insert text");
    return store.upsert(table, {
      ...params,
      user,
    });
  };

  const get = async (postId) => {
    return store.get(table, postId);
  };

  return { list, upsert, get };
};
