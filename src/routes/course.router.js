const express = require("express");
const multer = require("multer");
// const multerConfig = require("config/multer");

const Controller = require("../controllers/CourseController");

const courseRouter = express.Router();

courseRouter.get("/courses", async (req, res) =>
  Controller.getCourse(req, res)
);

courseRouter.get("/course/:id", async (req, res) =>
  Controller.getCourseById(req, res)
);

courseRouter.post("/course/add", async (req, res) =>
  Controller.saveCourse(req, res)
);

courseRouter.post(
  "/courseimg/add",
  multer().single("file"),
  async (req, res) => {
    console.log(req);
    Controller.saveCourseImg(req, res);
  }
);

courseRouter.delete("/course/delete/:id", async (req, res) =>
  Controller.deleteCourse(req, res)
);

courseRouter.put("/course/update/:id", async (req, res) =>
  Controller.updateCourse(req, res)
);

module.exports = courseRouter;
