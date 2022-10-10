const express = require("express");
const multer = require("multer");
const multerConfig = require("../config/multerProfile");

const Controller = require("../controllers/CourseController");

const instructorRouter = express.Router();

instructorRouter.get("/instructors", async (req, res) =>
  Controller.getCourse(req, res)
);

instructorRouter.get("/instructor/:id", async (req, res) =>
  Controller.getCourseById(req, res)
);

instructorRouter.post("/instructor/add", async (req, res) =>
  Controller.saveCourse(req, res)
);

instructorRouter.post(
  "/instructorimg/add",
  multer(multerConfig).single("file"),
  async (req, res) => {
    console.log(req);
    Controller.saveCourseImg(req, res);
  }
);

instructorRouter.delete("/instructor/delete/:id", async (req, res) =>
  Controller.deleteCourse(req, res)
);

instructorRouter.put("/instructor/update/:id", async (req, res) =>
  Controller.updateCourse(req, res)
);

module.exports = instructorRouter;
