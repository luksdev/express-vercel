/* eslint-disable @typescript-eslint/no-explicit-any */
const db = require("../utils/db.server.js");

const listModules = async () => {
  return await db.modules.findMany({
    select: {
      id: true,
      name: true,
      id_course: true,
    },
  });
};

const getModule = async (id) => {
  return await db.modules.findUnique({
    where: {
      id,
    },
  });
};

const createModule = async (name, id_course) => {
  return await db.modules.create({
    data: {
      name,
      id_course,
    },
  });
};

const deleteModule = async (id) => {
  return await db.modules.delete({
    where: {
      id,
    },
  });
};

const updateModule = async (id, name, id_course) => {
  return await db.modules.update({
    where: {
      id,
    },
    data: {
      name,
      id_course,
    },
  });
};

module.exports = {
  listModules,
  getModule,
  createModule,
  deleteModule,
  updateModule,
};
