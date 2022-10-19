const db = require("../utils/db.server.js");

const getAllComments = async () => {
  return await db.comments.findMany({
    select: {
      id: true,
      comment: true,
      date: true,
      id_comment: true,
      id_class: true,
      id_user: true,
      usersId: true,
    },
  });
};

const getComment = async (id) => {
  return await db.comments.findUnique({
    where: {
      id,
    },
  });
};

const getCommentsByClassId = async (id_class) => {
  return await db.comments.findMany({
    where: {
      id_class,
    },
  });
};

const createComment = async (
  comment,
  date,
  id_comment,
  id_class,
  id_user,
  usersId
) => {
  return await db.comments.create({
    data: {
      comment,
      date,
      id_comment,
      id_class,
      id_user,
      usersId,
    },
  });
};

const deleteComment = async (id) => {
  return await db.comments.delete({
    where: {
      id,
    },
  });
};

const updateComment = async (id, comment, date) => {
  return await db.comments.update({
    where: {
      id,
    },
    data: {
      comment,
      date,
    },
  });
};

module.exports = {
  getComment,
  getCommentsByClassId,
  createComment,
  updateComment,
  deleteComment,
  getAllComments,
};
