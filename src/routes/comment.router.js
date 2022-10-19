const express = require("express");

const Controller = require("../controllers/CommentsController");

const comment = express.Router();

comment.get("/comments", async (req, res) => {
  Controller.getAllComments(req, res);
});

comment.get("/comment/:id", async (req, res) =>
  Controller.getComment(req, res)
);

comment.get("/commentsByClass/:id_class", async (req, res) =>
  Controller.getCommentsByClassId(req, res)
);

comment.post("/comment/add", async (req, res) =>
  Controller.saveComment(req, res)
);

comment.delete("/comment/delete/:id", async (req, res) =>
  Controller.deleteComment(req, res)
);

comment.put("/comment/update/:id", async (req, res) =>
  Controller.updateComment(req, res)
);

module.exports = comment;
