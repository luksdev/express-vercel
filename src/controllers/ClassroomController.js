const ClassroomService = require("../services/classroom.service.js");
// const ffmpeg = require("ffmpeg");
const ffmpeg = require("fluent-ffmpeg");
var ffprobe = require("ffprobe");

// ffmpeg.setFfmpegPath(ffmpegInstaller.path);

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
  const { title, description, url_video, id_module, duration } = req.body;

  ClassroomService.createClassroom(
    title,
    description,
    url_video,
    duration,
    Number(id_module)
  )
    .then((classroom) => {
      if (classroom) {
        res.status(200).send(classroom);
      } else {
        res.status(404).send("Clasroom not created");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const saveFiles = (req, res) => {
  const { id_class } = req.body;
  console.log(req.body);
  // const { originalname: name, key, size, location: url } = req.file;

  // converter id_course para number
  // fazer um for para cada arquivo

  req.files.forEach((element) => {
    let filesSended = [];
    ClassroomService.insertFiles(element.location, Number(id_class))
      .then((files) => {
        if (files) {
          filesSended.push(files);
        } else {
          res.status(404).send("Não foi possível inserir o arquivo!");
        }
      })
      .catch((e) => res.status(500).send(e.message));
  });

  res.status(201).send(req.files);
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
  const { title, description, url_video, id_module, is_finished } = req.body;

  ClassroomService.updateClassroom(
    Number(req.params.id),
    title,
    description,
    url_video,
    Number(id_module),
    is_finished
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
  saveFiles,
};
