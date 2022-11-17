const db = require("../utils/db.server.js");

const listAllRatings = async () => {
  return await db.ratingCourse.findMany({
    select: {
      createdAt: true,
      id: true,
      rating_text: true,
      is_favorite: true,
      user: true,
      course: true,
    },
  });
};

const listRatingsByCourse = async (courseId) => {
  return await db.ratingCourse.findMany({
    where: {
      id_course: Number(courseId),
    },
    select: {
      id: true,
      rating_text: true,
      is_favorite: true,
      user: true,
      course: true,
    },
  });
};

const listRatingsByUser = async (userId) => {
  return await db.ratingCourse.findMany({
    where: {
      id_user: Number(userId),
    },
    select: {
      id: true,
      rating_text: true,
      is_favorite: true,
      user: true,
      course: true,
    },
  });
};

const createRating = async (rating) => {
  return await db.ratingCourse.create({
    data: rating,
  });
};

const updateRating = async (rating) => {
  return await db.ratingCourse.update({
    where: {
      id: Number(rating.id),
    },
    data: rating,
  });
};

module.exports = {
  listAllRatings,
  listRatingsByCourse,
  listRatingsByUser,
  createRating,
  updateRating,
};
