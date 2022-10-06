/* eslint-disable @typescript-eslint/no-explicit-any */
import db from "utils/db.server";

export const listClasses = async () => {
  return await db.classes.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      url_video: true,
      id_module: true,
    },
  });
};

export const getClassroom = async (id) => {
  return await db.classes.findUnique({
    where: {
      id,
    },
  });
};

export const createClassroom = async (
  title,
  description,
  url_video,
  id_module
) => {
  return await db.classes.create({
    data: {
      title,
      description,
      url_video,
      id_module,
    },
  });
};

export const deleteClassroom = async (id) => {
  return await db.classes.delete({
    where: {
      id,
    },
  });
};

export const updateClassroom = async (
  id,
  title,
  description,
  url_video,
  id_module
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
    },
  });
};
