/* eslint-disable @typescript-eslint/no-explicit-any */
const db = require("../utils/db.server.js");

const listInstructors = async () => {
  return await db.instructors.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      image_profile: true,
    },
  });
};

const getInstructor = async (id) => {
  return await db.instructors.findUnique({
    where: {
      id,
    },
  });
};

const insertImg = async (name, url, key, id_course, size) => {
  return await db.imagesInstructors.create({
    data: {
      name,
      size,
      url_image: url,
      key: key,
      createdAt: new Date(),
      id_course,
    },
  });
};

const createInstructor = async (name, description, image_profile) => {
  return await db.instructors.create({
    data: {
      name,
      description,
      image_profile,
    },
  });
};

const deleteInstructor = async (id) => {
  return await db.users.delete({
    where: {
      id,
    },
  });
};

const updateInstructor = async (id, name) => {
  return await db.users.update({
    where: {
      id,
    },
    data: {
      name,
      description,
      image_profile,
    },
  });
};

module.exports = {
  listInstructors,
  getInstructor,
  createInstructor,
  deleteInstructor,
  updateInstructor,
};
