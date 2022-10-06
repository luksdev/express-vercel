const UserService = require("../services/user.service.js");
// const prima = require("@prisma/client");

const getUser = (req, res) => {
  UserService.listUsers()
    .then((users) => {
      if (users) {
        res.status(200).send(users);
      } else {
        res.status(404).send("Users not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const getUserById = (req, res) => {
  const { id } = req.params;

  UserService.getUser(Number(id))
    .then((user) => {
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send("User not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const signin = (req, res) => {
  const { email } = req.body;

  UserService.loginUser(email)
    .then((user) => {
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send("User not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const signup = (req, res) => {
  const { name, email, role, identifier, password, job } = req.body;

  UserService.createUser(name, email, role, identifier, password, job)
    .then((user) => {
      if (user) {
        res.status(201).send(user);
      } else {
        res.status(404).send("Não foi possível criar o usuário");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const deleteUser = (req, res) => {
  UserService.deleteUser(Number(req.params.id))
    .then((user) => {
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send("User not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const updateUser = (req, res) => {
  const { name, email, role, identifier, password } = req.body;

  UserService.updateUser(
    Number(req.params.id),
    name,
    email,
    role,
    identifier,
    password
  )
    .then((user) => {
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send("User not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

module.exports = {
  getUser,
  getUserById,
  signin,
  signup,
  deleteUser,
  updateUser,
};
