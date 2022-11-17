const express = require("express");

const Controller = require("../controllers/RatingController.js");

const ratingRouter = express.Router();

ratingRouter.get("/ratings", async (req, res) =>
  Controller.getAllRatings(req, res)
);

ratingRouter.get("/rating/user/:userId", async (req, res) =>
  Controller.getRatingsByUser(req, res)
);

ratingRouter.get("/rating/course/:courseId", async (req, res) =>
  Controller.getRatingsByCourse(req, res)
);

ratingRouter.post("/rating", async (req, res) =>
  Controller.createRating(req, res)
);

ratingRouter.put("/rating", async (req, res) =>
  Controller.updateRating(req, res)
);

module.exports = ratingRouter;
