/* eslint-disable @typescript-eslint/no-explicit-any */
const db = require("../utils/db.server.js");

const listCourses = async () => {
  return await db.courses.findMany({
    include: {
      instructor: true,
      modules: {
        include: {
          _count: true,
          classes: {
            include: {
              comments: {
                include: {
                  user: true,
                },
              },
            },
          },
        },
      },
    },
  });
};

const getCourse = async (id) => {
  return await db.courses.findUnique({
    where: {
      id,
    },
    include: {
      instructor: true,
      modules: {
        include: {
          _count: true,
          classes: {
            include: {
              comments: {
                include: {
                  user: true,
                },
              },
            },
          },
        },
      },
    },
  });
};

const createCourse = async (
  title,
  cover_image,
  description,
  id_category,
  id_instructor,
  subject
) => {
  return await db.courses.create({
    data: {
      title,
      cover_image,
      description,
      id_category,
      id_instructor,
      subject,
    },
  });
};

const insertImg = async (name, url, key, id_course, size) => {
  return await db.imagesCourses.create({
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

const deleteCourse = async (id) => {
  return await db.courses.delete({
    where: {
      id,
    },
  });
};

const updateCourse = async (
  id,
  title,
  cover_image,
  description,
  id_category,
  id_instructor
) => {
  return await db.courses.update({
    where: {
      id,
    },
    data: {
      title,
      cover_image,
      description,
      id_category,
      id_instructor,
    },
  });
};

const updateSubject = async (id, subject) => {
  return await db.courses.update({
    where: {
      id,
    },
    data: {
      subject,
    },
  });
};

module.exports = {
  listCourses,
  getCourse,
  createCourse,
  deleteCourse,
  updateCourse,
  insertImg,
  updateSubject,
};
