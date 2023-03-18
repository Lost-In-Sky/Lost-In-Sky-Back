const express = require('express')
const router = express.Router()

const { createReservation, getReservations, getReservation, updateReservation, deleteReservation } = require('../controllers/reservationsController')

router.post('/api/reservation', createReservation)

router.get('/api/reservation', getReservations)

router.get('/api/reservation/:id', getReservation)

router.patch('/api/reservation', updateReservation)

router.delete('/api/reservation', deleteReservation)

module.exports = router
