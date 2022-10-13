const express = require("express");
const multer = require("multer");
const multerConfig = require("../config/multerProfile");

const Controller = require("../controllers/InstructorController");

const instructorRouter = express.Router();

instructorRouter.get("/instructors", async (req, res) =>
  Controller.getInstructors(req, res)
);

instructorRouter.get("/instructor/:id", async (req, res) =>
  Controller.getInstructorById(req, res)
);

instructorRouter.post("/instructor/add", async (req, res) =>
  Controller.saveInstructor(req, res)
);

instructorRouter.post(
  "/instructorimg/add",
  multer(multerConfig).single("file"),
  async (req, res) => {
    Controller.saveInstructorImg(req, res);
  }
);

instructorRouter.delete("/instructor/delete/:id", async (req, res) =>
  Controller.deleteInstructor(req, res)
);

instructorRouter.put("/instructor/update/:id", async (req, res) => {
  console.log("Req update instructor: ", req.body);
  Controller.updateInstructor(req, res);
});

module.exports = instructorRouter;
