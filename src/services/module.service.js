/* eslint-disable @typescript-eslint/no-explicit-any */
import db from "utils/db.server";

export const listModules = async () => {
  return await db.modules.findMany({
    select: {
      id: true,
      name: true,
      id_course: true,
    },
  });
};

export const getModule = async (id) => {
  return await db.modules.findUnique({
    where: {
      id,
    },
  });
};

export const createModule = async (name, id_course) => {
  return await db.modules.create({
    data: {
      name,
      id_course,
    },
  });
};

export const deleteModule = async (id) => {
  return await db.modules.delete({
    where: {
      id,
    },
  });
};

export const updateModule = async (id, name, id_course) => {
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
