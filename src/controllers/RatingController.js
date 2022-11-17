const RatingService = require("../services/rating.service.js");

const getAllRatings = (req, res) => {
  RatingService.listAllRatings()
    .then((ratings) => {
      if (ratings) {
        res.status(200).send({
          message: "Ratings retrieved successfully",
          ratings: ratings,
        });
      } else {
        res.status(404).send("ratings not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const getRatingsByCourse = (req, res) => {
  RatingService.listRatingsByCourse(req.params.courseId)
    .then((ratings) => {
      if (ratings) {
        res.status(200).send({
          message: "Ratings retrieved successfully",
          ratings: ratings,
        });
      } else {
        res.status(404).send("ratings not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const getRatingsByUser = (req, res) => {
  RatingService.listRatingsByUser(req.params.userId)
    .then((ratings) => {
      if (ratings) {
        res.status(200).send({
          message: "Ratings retrieved successfully",
          ratings: ratings,
        });
      } else {
        res.status(404).send("ratings not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const createRating = (req, res) => {
  RatingService.createRating(req.body)
    .then((rating) => {
      if (rating) {
        res.status(200).send({
          message: "Rating created successfully",
          rating: rating,
        });
      } else {
        res.status(404).send("rating not created");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const updateRating = (req, res) => {
  RatingService.updateRating(req.body)
    .then((rating) => {
      if (rating) {
        res.status(200).send({
          message: "Rating updated successfully",
          rating: rating,
        });
      } else {
        res.status(404).send("rating not updated");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

module.exports = {
  getAllRatings,
  getRatingsByCourse,
  getRatingsByUser,
  createRating,
  updateRating,
};
