const express = require('express');
const router = express.Router();

const authJwt = require("../services/authJwt");
const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  signIn,
  signOut,
  adminBoard
} = require('../controllers/usersController');

router.post('/', createUser);

router.get('/', [authJwt.verifyToken, authJwt.isAdmin], getUsers);

router.get('/:id', [authJwt.verifyToken, authJwt.isAdmin], getUser);

router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);

router.post("/registration", createUser)

router.post("/signin", signIn)

router.post("/signout", signOut)

router.post('/adminpanel', [authJwt.verifyToken, authJwt.isAdmin], adminBoard)

module.exports = router;
