import { Request, Response } from "express";
import * as ModuleService from "services/module.service";
import { Prisma } from "@prisma/client";

const getModule = (req, res) => {
  ModuleService.listModules()
    .then((modules) => {
      if (modules) {
        res.status(200).send(modules);
      } else {
        res.status(404).send("Modules not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const getModuleById = (req, res) => {
  const { id } = req.params;

  ModuleService.getModule(Number(id))
    .then((module) => {
      if (module) {
        res.status(200).send(module);
      } else {
        res.status(404).send("Module not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const saveModule = (req, res) => {
  const { name, id_course } = req.body;

  ModuleService.createModule(name, id_course)
    .then((module) => {
      if (module) {
        res.status(201).send(module);
      } else {
        res.status(404).send("Não foi possível criar o módulo!");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const deleteModule = (req, res) => {
  ModuleService.deleteModule(Number(req.params.id))
    .then((module) => {
      if (module) {
        res.status(200).send(module);
      } else {
        res.status(404).send("Module not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const updateModule = (req, res) => {
  const { name, id_course } = req.body;

  ModuleService.updateModule(Number(req.params.id), name, Number(id_course))
    .then((module) => {
      if (module) {
        res.status(200).send(module);
      } else {
        res.status(404).send("Module not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

export { getModule, getModuleById, saveModule, deleteModule, updateModule };
