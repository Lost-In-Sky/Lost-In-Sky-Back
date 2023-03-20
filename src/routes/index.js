const express = require("express");
const router = express.Router();

const {
  getAllReservationsForCottage,
  getAllServicesForReservations,
} = require("../controllers/controller");
const userRouter = require("./userRoutes");
const cottageRouter = require("./cottageRoutes");
const reservationRouter = require("./reservationRoutes");
const serviceRouter = require("./serviceRoutes"); 

router.use("/api/reservation", reservationRouter); 
router.use("/api/cottage", cottageRouter);
router.use("/api/user", userRouter);
router.use("/api/service", serviceRouter);

// Get Reservations For Given Cottage
router.get("/api/getAllReservations/:id", getAllReservationsForCottage);

// Get Services For Given Reservation
router.get("/api/getAllServices/:id", getAllServicesForReservations);

module.exports = router;
