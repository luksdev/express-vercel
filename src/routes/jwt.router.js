const express = require("express");
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const { getUser } = require("../services/jwt.service");

const userRouter = express.Router();

userRouter.get("/me", async (req, res) => {
  console.log(req);

  getUser().then((user) => res.status(200).send(user));
});

exports.userRouter = userRouter;
