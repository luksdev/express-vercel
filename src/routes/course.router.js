import * as express from "express";
import { Request, Response } from "express";
import * as multer from "multer";
import * as multerConfig from "config/multer";

import * as Controller from "../controllers/CourseController";

export const courseRouter = express.Router();

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
  multer(multerConfig).single("file"),
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
