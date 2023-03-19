const express = require("express");
const router = express.Router();

const {
  createReservation,
  getReservations,
  getReservation,
  updateReservation,
  deleteReservation,
} = require("../controllers/reservationsController");

router.post("/", createReservation);

router.get("/", getReservations);

router.get("/:id", getReservation);

router.patch("/", updateReservation);

router.delete("/", deleteReservation);

module.exports = router;
