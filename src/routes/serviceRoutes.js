const express = require("express");
const router = express.Router();

const {
  createService,
  getServices,
  getService,
  updateService,
  deleteService,
} = require("../controllers/reservationServicesController");

router.post("/", createService);

router.get("/", getServices);

router.get("/:id", getService);

router.patch("/", updateService);

router.delete("/", deleteService);

module.exports = router;
