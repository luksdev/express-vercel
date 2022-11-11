/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

const InstructorService = require("../services/instructor.service");

const getInstructors = (req, res) => {
  InstructorService.listInstructors()
    .then((courses) => {
      if (courses) {
        res.status(200).send(courses);
      } else {
        res.status(404).send("Instructors not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const getInstructorById = (req, res) => {
  const { id } = req.params;

  InstructorService.getInstructor(Number(id))
    .then((instructor) => {
      if (instructor) {
        res.status(200).send(instructor);
      } else {
        res.status(404).send("Instructor not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const saveInstructor = (req, res) => {
  const { name, description, image_profile } = req.body;

  InstructorService.createInstructor(name, description, image_profile)
    .then((instructor) => {
      if (instructor) {
        res.status(201).send({
          message: "Instructor created successfully",
          instructor,
        });
      } else {
        res.status(404).send("Não foi possível adicionar o instrutor!");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const saveInstructorImg = (req, res) => {
  const { id_instructor } = req.body;
  const { originalname: name, key, size, location: url } = req.file;

  // converter id_course para number
  const id = Number(id_instructor);

  InstructorService.insertImg(name, url, key, id, size)
    .then((img) => {
      if (img) {
        res.status(201).send(img);
      } else {
        res.status(404).send("Não foi possível enviar a imagem!");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const deleteInstructor = (req, res) => {
  InstructorService.deleteInstructor(Number(req.params.id))
    .then((instructor) => {
      if (instructor) {
        res.status(200).send(instructor);
      } else {
        res.status(404).send("Course not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const updateInstructor = (req, res) => {
  const { id, name, description, image_profile } = req.body;

  console.log("Req update instructor: ", req.body);

  InstructorService.updateInstructor(id, name, description, image_profile)
    .then((course) => {
      if (course) {
        res.status(200).send(course);
      } else {
        res.status(404).send("Course not found");
      }
    })
    .catch((e) => {
      console.log(e);
      res.status(500).send(e.message);
    });
};

module.exports = {
  getInstructors,
  getInstructorById,
  saveInstructor,
  saveInstructorImg,
  deleteInstructor,
  updateInstructor,
};
