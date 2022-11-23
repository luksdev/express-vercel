const express = require("express");

const Controller = require("../controllers/UserController.js");
const AuthMiddleware = require("../middlewares/AuthMiddleware.js");

const userRouter = express.Router();

userRouter.get("/users", async (req, res) => Controller.getUser(req, res));

userRouter.get("/me", AuthMiddleware, async (req, res) =>
  Controller.getUserById(req, res)
);

userRouter.get("/user/:id", async (req, res) =>
  Controller.getUserByIdWithoutJWT(req, res)
);

userRouter.post("/user/add", async (req, res) => Controller.signup(req, res));

userRouter.delete("/user/delete/:id", async (req, res) =>
  Controller.deleteUser(req, res)
);

userRouter.put("/user/update/:id", async (req, res) =>
  Controller.updateUser(req, res)
);

userRouter.post("/user/:user_id/insertCourse/:course_id", async (req, res) =>
  Controller.insertUserToCourse(req, res)
);

userRouter.put(
  "/user/is_finished/:user_id/:course_id/:module_id/:class_id",
  async (req, res) => Controller.updateIsFinished(req, res)
);

userRouter.post(
  "/user/:user_id/finishClass/:course_id/:module_id/:class_id",
  async (req, res) => Controller.finishClass(req, res)
);

userRouter.post(
  "/user/:user_id/module/:module_id/class/:class_id",
  async (req, res) => Controller.updateClass(req, res)
);

userRouter.post("/user/login", async (req, res) => Controller.signin(req, res));

module.exports = userRouter;
