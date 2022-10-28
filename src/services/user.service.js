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
    },
  });
};

const getUser = async (id) => {
  return await db.users.findUnique({
    where: {
      id,
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

const deleteUser = async (id) => {
  return await db.users.delete({
    where: {
      id,
    },
  });
};

const updateUser = async (id, name, email, job, role, identifier, password) => {
  return await db.users.update({
    where: {
      id,
    },
    data: {
      name,
      email,
      role,
      job,
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
};
