const express = require("express");

const Controller = require("../controllers/UserController.js");

const userRouter = express.Router();

userRouter.get("/users", async (req, res) => Controller.getUser(req, res));

userRouter.get("/user/:id", async (req, res) =>
  Controller.getUserById(req, res)
);

userRouter.post("/user/add", async (req, res) => Controller.signup(req, res));

userRouter.delete("/user/delete/:id", async (req, res) =>
  Controller.deleteUser(req, res)
);

userRouter.put("/user/update/:id", async (req, res) =>
  Controller.updateUser(req, res)
);

userRouter.post("/user/login", async (req, res) => Controller.signin(req, res));

module.exports = userRouter;
