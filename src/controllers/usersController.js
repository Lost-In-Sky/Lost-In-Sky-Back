const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  signIn,
  signOut
} = require('../services/users');

// Users Controller
exports.createUser = (request, response) => {
  createUser(request, response);
};

exports.getUsers = (request, response) => {
  getUsers(request, response);
};

exports.getUser = (request, response) => {
  getUser(request, response);
};

exports.updateUser = (request, response) => {
  updateUser(request, response);
};

exports.deleteUser = (request, response) => {
  deleteUser(request, response);
};

exports.signIn = (request, response) => {
  signIn(request, response);
};

exports.signOut = (request, response) => {
  signOut(request, response);
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};