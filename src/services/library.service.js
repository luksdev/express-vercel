const db = require("../utils/db.server.js");

const getContent = async (id) => {
  return await db.library.findUnique({
    where: {
      id,
    },
  });
};

const getContentsByClassId = async (id_class) => {
  return await db.library({
    where: {
      id_class,
    },
  });
};

const createContent = async (url, id_class) => {
  return await db.library.create({
    data: {
      url,
      id_class,
    },
  });
};

const deleteContent = async (id) => {
  return await db.library.delete({
    where: {
      id,
    },
  });
};

const updateContent = async (id, url) => {
  return await db.library.update({
    where: {
      id,
    },
    data: {
      url,
    },
  });
};

module.exports = {
  getContent,
  getContentsByClassId,
  createContent,
  updateContent,
  deleteContent,
};
