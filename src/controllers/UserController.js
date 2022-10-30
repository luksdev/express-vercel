const UserService = require("../services/user.service.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.js");
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
  UserService.getUser(Number(req.userId))
    .then((user) => {
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send("User not found");
      }
    })
    .catch((e) => res.status(500).send(e.message));
};

const getUserByIdWithoutJWT = (req, res) => {
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
  const { email, password } = req.body;

  UserService.loginUser(email)
    .then((user) => {
      if (!user) res.status(404).send("User not found");

      if (!password) return res.status(404).send("Password is required!");

      const isValid = bcrypt.compareSync(password, user.password);

      if (!isValid) return res.status(401).send("Password is incorrect!");

      return res.status(200).json({
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          identifier: user.identifier,
          job: user.job,
        },
        token: jwt.sign({ id: user.id }, config.secret, {
          expiresIn: config.expiresIn,
        }),
      });
    })
    .catch((e) => res.status(500).send(e.message));
};

const signup = (req, res) => {
  const { name, email, role, identifier, password, job } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  UserService.createUser(name, email, role, identifier, hash, job)
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
  const { name, email, role, identifier, password: pass, job } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const password = bcrypt.hashSync(pass, salt);

  UserService.updateUser(
    Number(req.params.id),
    name,
    email,
    role,
    job,
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
  getUserByIdWithoutJWT
};
