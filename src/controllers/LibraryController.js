const LibraryService = require("../services/library.service");

const getContent = (req, res) => {
  const { id } = req.params;

  LibraryService.getContent(Number(id))
    .then((content) => {
      if (content) {
        res.status(200).send(content);
      } else {
        res.status("404").send("Content not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const getContentsByClassId = (req, res) => {
  const { id_class } = req.params;
  LibraryService.getContentsByClassId(Number(id_class))
    .then((contents) => {
      if (contents) {
        res.status(200).send(contents);
      } else {
        res.status(404).send("No contents found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const saveContent = (req, res) => {
  const { url, id_class } = req.body;

  LibraryService.createContent(url, Number(id_class))
    .then((content) => {
      if (content) {
        res.status(201).send(content);
      } else {
        res.status(404).send("Não foi possível salvar o conteudo");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const deleteContent = (req, res) => {
  LibraryService.deleteContent(Number(req.params.id))
    .then((content) => {
      if (content) {
        res.status(200).send(content);
      } else {
        res.status("404").send("Content not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const updateContent = (req, res) => {
  const { url } = req.body;
  LibraryService.updateContent(Number(req.params.id), url)
    .then((content) => {
      if (content) {
        res.status(200).send(content);
      } else {
        res.status("404").send("Content not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const saveContentUpload = (req, res) => {
  const { id_class } = req.body;
  const { location: url } = req.file;

  LibraryService.createContent(Number(id_class), url)
    .then((content) => {
      if (content) {
        res.status(200).send(content);
      } else {
        res.status("404").send("Content not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

module.exports = {
  getContent,
  getContentsByClassId,
  saveContent,
  updateContent,
  deleteContent,
  saveContentUpload,
};
