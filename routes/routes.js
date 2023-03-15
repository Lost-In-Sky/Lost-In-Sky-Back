const express = require('express')
const router = express.Router()

const { getAllReservationsForCottage, getAllServicesForReservations } = require('../controllers/controller.js');

const { createUser, getUsers, updateUser, deleteUser } = require('../controllers/usersController')
const { createCottage, getCottages, updateCottage, deleteCottage } = require('../controllers/cottagesController')
const { createReservation, getReservations, updateReservation, deleteReservation } = require('../controllers/reservationsController')
const { createService, getServices, updateService, deleteService } = require('../controllers/reservationServicesController')

// Create routes
router.post('/create/user', createUser)
router.post('/create/cottage', createCottage)
router.post('/create/reservation', createReservation)
router.post('/create/service', createService)

// Get Routes
router.get('/get/users', getUsers)
router.get('/get/cottages', getCottages)
router.get('/get/reservations', getReservations)
router.get('/get/services', getServices)

// Update Routes
router.post('/edit/user', updateUser)
router.post('/edit/cottage', updateCottage)
router.post('/edit/reservation', updateReservation)
router.post('/edit/service', updateService)

// Delete Routes
router.delete('/delete/user', deleteUser)
router.delete('/delete/cottage', deleteCottage)
router.delete('/delete/reservation', deleteReservation)
router.delete('/delete/service', deleteService)

// Get Reservations For Given Cottage
router.get('/getAllReservations', getAllReservationsForCottage)

// Get Services For Given Reservation
router.get('/getAllServices', getAllServicesForReservations)

module.exports = router;
