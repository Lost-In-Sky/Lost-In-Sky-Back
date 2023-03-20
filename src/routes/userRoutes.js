const express = require("express");
const router = express.Router();

const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

router.post("/", createUser);

router.get("/", getUsers);

router.get("/:id", getUser);

router.patch("/", updateUser);

router.delete("/", deleteUser);

module.exports = router;
