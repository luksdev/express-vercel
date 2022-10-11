const express = require("express");
const multer = require("multer");
const multerConfig = require("../config/multerLibrary");

const Controller = require("../controllers/LibraryController");

const libraryRouter = express.Router();

libraryRouter.post(
  "/library/upload",
  multer(multerConfig).single,
  async (req, res) => {
    Controller.saveContentUpload(req, res);
  }
);

libraryRouter.get("/content/:id", async (req, res) =>
  Controller.getContent(req, res)
);

libraryRouter.get("/contentsByClass/:id_class", async (req, res) =>
  Controller.getContentsByClassId(req, res)
);

libraryRouter.post("/content/add", async (req, res) =>
  Controller.saveContent(req, res)
);

libraryRouter.delete("/content/delete/:id", async (req, res) =>
  Controller.deleteContent(req, res)
);

libraryRouter.put("/content/update/:id", async (req, res) =>
  Controller.updateContent(req, res)
);

module.exports = libraryRouter;
