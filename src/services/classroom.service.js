/* eslint-disable @typescript-eslint/no-explicit-any */
const db = require("../utils/db.server.js");

const listClasses = async () => {
  return await db.classes.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      url_video: true,
      id_module: true,
      duration: true,
      is_finished: true,
    },
  });
};

const getClassroom = async (id) => {
  return await db.classes.findUnique({
    where: {
      id,
    },
  });
};

const createClassroom = async (
  title,
  description,
  url_video,
  id_module,
  duration
) => {
  return await db.classes.create({
    data: {
      title,
      description,
      url_video,
      id_module: duration,
      duration: id_module,
    },
  });
};

const insertFiles = async (url, id_class) => {
  return await db.library.create({
    data: {
      url,
      id_class,
    },
  });
};

const deleteClassroom = async (id) => {
  return await db.classes.delete({
    where: {
      id,
    },
  });
};

const updateClassroom = async (
  id,
  title,
  description,
  url_video,
  id_module,
  is_finished
) => {
  return await db.classes.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      url_video,
      id_module,
      is_finished,
    },
  });
};

module.exports = {
  listClasses,
  getClassroom,
  createClassroom,
  deleteClassroom,
  updateClassroom,
  insertFiles,
};
