/* eslint-disable @typescript-eslint/no-explicit-any */
const db = require("../utils/db.server.js");

const listUsers = async () => {
  return await db.users.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      job: true,
      identifier: true,
      createdAt: true,
      updatedAt: true,
      startedCourses: {
        select: {
          createdAt: true,
          course: {
            select: {
              modules: {
                select: {
                  classes: true,
                },
              },
            },
          },
        },
      },
    },
  });
};

const getUser = async (id) => {
  return await db.users.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      job: true,
      identifier: true,
      createdAt: true,
      updatedAt: true,
      startedCourses: {
        select: {
          course: true,
        },
      },
      finishedClasses: {
        select: {
          class: true,
          course: true,
          module: true,
          user: true,
          createdAt: true,
        },
      },
    },
  });
};

const loginUser = async (email) => {
  // Verificar se a senha criptografada com bcrypt é igual a senha do usuário
  return await db.users.findUnique({
    where: {
      email,
    },
  });
};

const createUser = async (name, email, role, identifier, password, job) => {
  return await db.users.create({
    data: {
      name,
      email,
      role,
      identifier,
      password,
      job,
    },
  });
};

const insertUserToCourse = async (userId, courseId) => {
  return await db.startedCourses.create({
    data: {
      id_user: userId,
      id_course: courseId,
    },
  });
};

const finishClass = async (userId, courseId, moduleId, classId) => {
  return await db.finishedClasses.create({
    data: {
      id_user: userId,
      id_course: courseId,
      id_module: moduleId,
      id_class: classId,
    },
  });
};

// atualizar is_finished para true que esta na tabela classes
const updateClass = async (id, id_module, id_user) => {
  return await db.classes.update({
    // Quando id_module for igual ao id_module do parametro
    where: {
      id_user,
      id_module,
      id,
    },
    data: {
      is_finished: true,
    },
  });
};

const deleteUser = async (id) => {
  return await db.users.delete({
    where: {
      id,
    },
  });
};

const updateUser = async (id, name, email, job, role, identifier, password) => {
  console.warn(id, name, email, job, role, identifier, password);

  return await db.users.update({
    where: {
      id,
    },
    data: {
      name,
      email,
      role: job,
      job: role,
      identifier,
      password,
    },
  });
};

module.exports = {
  listUsers,
  getUser,
  loginUser,
  createUser,
  deleteUser,
  updateUser,
  insertUserToCourse,
  updateClass,
  finishClass,
};
