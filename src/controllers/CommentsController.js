const CommentService = require("../services/comments.service");

const getAllComments = (req, res) => {
  CommentService.getAllComments()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving comments.",
      });
    });
};

const getComment = (req, res) => {
  const { id } = req.params;

  CommentService.getComment(Number(id))
    .then((comment) => {
      if (comment) {
        res.status(200).send(comment);
      } else {
        res.status("404").send("Comment not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const getCommentsByClassId = (req, res) => {
  const { id_class } = req.params;
  CommentService.getCommentsByClassId(Number(id_class))
    .then((comments) => {
      if (comments) {
        res.status(200).send(comments);
      } else {
        res.status(404).send("No comments found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const saveComment = (req, res) => {
  const { comment, id_class, id_user } = req.body;

  console.log(req.body);

  CommentService.createComment(comment, Number(id_class), Number(id_user))
    .then((comment) => {
      if (comment) {
        res.status(201).send(comment);
      } else {
        res.status(404).send("Não foi possível salvar o comentario");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const saveCommentReply = (req, res) => {
  const { comment_reply, id_comment, id_user, is_reply } = req.body;

  CommentService.createCommentReply(
    comment_reply,
    id_comment,
    id_user,
    is_reply
  )
    .then((comment) => {
      if (comment) {
        res.status(201).send(comment);
      } else {
        res.status(404).send("Não foi possível salvar o comentario");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const deleteComment = (req, res) => {
  CommentService.deleteComment(Number(req.params.id))
    .then((comment) => {
      if (comment) {
        res.status(200).send(comment);
      } else {
        res.status("404").send("Comment not found");
      }
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

const updateComment = (req, res) => {
  const { comment, date } = req.body;
  CommentService.updateComment(Number(req.params.id), comment, date)
    .then((comment) => {
      if (comment) {
        res.status(200).send(comment);
      } else {
        res.status("404").send("Comment not found");
      }
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

module.exports = {
  getComment,
  getCommentsByClassId,
  saveComment,
  updateComment,
  deleteComment,
  getAllComments,
  saveCommentReply,
};
