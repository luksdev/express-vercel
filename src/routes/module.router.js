import * as express from "express";
import { Request, Response } from "express";
import * as multer from "multer";
import * as multerConfig from "config/multer";

import * as Controller from "../controllers/ModuleController";

export const moduleRouter = express.Router();

moduleRouter.get("/modules", async (req, res) =>
  Controller.getModule(req, res)
);

moduleRouter.get("/module/:id", async (req, res) =>
  Controller.getModuleById(req, res)
);

moduleRouter.post("/course/add", async (req, res) =>
  Controller.saveModule(req, res)
);

moduleRouter.delete("/module/delete/:id", async (req, res) =>
  Controller.updateModule(req, res)
);

moduleRouter.put("/module/update/:id", async (req, res) =>
  Controller.updateModule(req, res)
);
