import * as express from "express";
import { Request, Response } from "express";

import * as Controller from "../controllers/ClassroomController";

export const classroomRouter = express.Router();

classroomRouter.get("/classes", async (req, res) =>
  Controller.getClassroom(req, res)
);

classroomRouter.get("/classroom/:id", async (req, res) =>
  Controller.getClassroomById(req, res)
);

classroomRouter.post("/classroom/add", async (req, res) =>
  Controller.saveClasroom(req, res)
);

classroomRouter.delete("/classroom/delete/:id", async (req, res) =>
  Controller.deleteClassroom(req, res)
);

classroomRouter.put("/classroom/update/:id", async (req, res) =>
  Controller.updateClassroom(req, res)
);
