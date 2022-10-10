const express = require("express");
const multer = require("multer");

const Controller = require("../controllers/ModuleController");

const moduleRouter = express.Router();

moduleRouter.get("/modules", async (req, res) =>
  Controller.getModule(req, res)
);

moduleRouter.get("/module/:id", async (req, res) =>
  Controller.getModuleById(req, res)
);

moduleRouter.post("/module/add", async (req, res) =>
  Controller.saveModule(req, res)
);

moduleRouter.delete("/module/delete/:id", async (req, res) =>
  Controller.updateModule(req, res)
);

moduleRouter.put("/module/update/:id", async (req, res) =>
  Controller.updateModule(req, res)
);

module.exports = moduleRouter;
