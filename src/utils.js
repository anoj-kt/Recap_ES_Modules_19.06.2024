const getItem = (id, collection) => {
  return collection.find((item) => item.id === id);
};

const random = null;

export { getItem };
