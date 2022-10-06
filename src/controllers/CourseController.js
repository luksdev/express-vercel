/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Request, Response } from "express";
import * as CourseService from "services/course.service";
import { Prisma } from "@prisma/client";

const getCourse = (req, res) => {
  CourseService.listCourses()
    .then((courses) => {
      if (courses) {
        res.status(200).send(courses);
      } else {
        res.status(404).send("Courses not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const getCourseById = (req, res) => {
  const { id } = req.params;

  CourseService.getCourse(Number(id))
    .then((course) => {
      if (course) {
        res.status(200).send(course);
      } else {
        res.status(404).send("Course not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const saveCourse = (req, res) => {
  const { title, cover_image, description, id_category, id_instructor } =
    req.body;

  CourseService.createCourse(
    title,
    cover_image,
    description,
    Number(id_category),
    Number(id_instructor)
  )
    .then((course) => {
      if (course) {
        res.status(201).send(course);
      } else {
        res.status(404).send("Não foi possível criar o curso!");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const saveCourseImg = (req, res) => {
  const { id_course } = req.body;
  const { originalname: name, key, size, location: url } = req.file;

  // converter id_course para number
  const id = Number(id_course);

  CourseService.insertImg(name, url, key, id, size)
    .then((img) => {
      if (img) {
        res.status(201).send(img);
      } else {
        res.status(404).send("Não foi possível enviar a imagem!");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const deleteCourse = (req, res) => {
  CourseService.deleteCourse(Number(req.params.id))
    .then((course) => {
      if (course) {
        res.status(200).send(course);
      } else {
        res.status(404).send("Course not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const updateCourse = (req, res) => {
  const { title, cover_image, description, id_category, id_instructor } =
    req.body;

  CourseService.updateCourse(
    Number(req.params.id),
    title,
    cover_image,
    description,
    Number(id_category),
    Number(id_instructor)
  )
    .then((course) => {
      if (course) {
        res.status(200).send(course);
      } else {
        res.status(404).send("Course not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

export {
  getCourse,
  getCourseById,
  saveCourse,
  deleteCourse,
  updateCourse,
  saveCourseImg,
};
