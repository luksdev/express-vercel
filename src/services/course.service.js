/* eslint-disable @typescript-eslint/no-explicit-any */
import db from "utils/db.server";

export const listCourses = async () => {
  return await db.courses.findMany({
    select: {
      id: true,
      title: true,
      cover_image: true,
      description: true,
      id_category: true,
      id_instructor: true,
    },
  });
};

export const getCourse = async (id) => {
  return await db.courses.findUnique({
    where: {
      id,
    },
  });
};

export const createCourse = async (
  title,
  cover_image,
  description,
  id_category,
  id_instructor
) => {
  return await db.courses.create({
    data: {
      title,
      cover_image,
      description,
      id_category,
      id_instructor,
    },
  });
};

export const insertImg = async (name, url, key, id_course, size) => {
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

export const deleteCourse = async (id) => {
  return await db.courses.delete({
    where: {
      id,
    },
  });
};

export const updateCourse = async (
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
