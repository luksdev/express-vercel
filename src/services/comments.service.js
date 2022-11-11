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
    include: {
      _count: true,
      user: true,
      Comments_reply: {
        select: {
          user: true,
          comment_reply: true,
          is_reply: true,
        },
      },
    },
  });
};

const createComment = async (comment, id_class, id_user) => {
  console.log("Service: ", comment, id_class, id_user);

  return await db.comments.create({
    data: {
      comment,
      id_class,
      id_user,
    },
  });
};

const createCommentReply = async (
  comment_reply,
  id_comment,
  id_user,
  is_reply
) => {
  return await db.comments_reply.create({
    data: {
      comment_reply,
      id_comment,
      id_user,
      is_reply,
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
  createCommentReply,
};
