const ClassroomService = require("../services/classroom.service.js");

const getClassroom = (req, res) => {
  ClassroomService.listClasses()
    .then((classes) => {
      if (classes) {
        res.status(200).send(classes);
      } else {
        res.status(404).send("Classes not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const getClassroomById = (req, res) => {
  const { id } = req.params;

  ClassroomService.getClassroom(Number(id))
    .then((clasroom) => {
      if (clasroom) {
        res.status(200).send(clasroom);
      } else {
        res.status(404).send("Clasroom not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const saveClasroom = (req, res) => {
  const { title, description, url_video, id_module } = req.body;

  ClassroomService.createClassroom(
    title,
    description,
    url_video,
    Number(id_module)
  )
    .then((classroom) => {
      if (classroom) {
        res.status(201).send(classroom);
      } else {
        res.status(404).send("Não foi possível criar o aula!");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const deleteClassroom = (req, res) => {
  ClassroomService.deleteClassroom(Number(req.params.id))
    .then((classroom) => {
      if (classroom) {
        res.status(200).send(classroom);
      } else {
        res.status(404).send("Classroom not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const updateClassroom = (req, res) => {
  const { title, description, url_video, id_module } = req.body;

  ClassroomService.updateClassroom(
    Number(req.params.id),
    title,
    description,
    url_video,
    Number(id_module)
  )
    .then((classroom) => {
      if (classroom) {
        res.status(200).send(classroom);
      } else {
        res.status(404).send("Classroom not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

module.exports = {
  getClassroom,
  getClassroomById,
  saveClasroom,
  deleteClassroom,
  updateClassroom,
};
