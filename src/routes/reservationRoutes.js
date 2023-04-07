const express = require('express');
const router = express.Router();

const { getAllReservationsForCottage } = require('../controllers/controller');
const {
  createReservation,
  getReservations,
  getReservation,
  updateReservation,
  deleteReservation,
} = require('../controllers/reservationsController');

router.post('/', createReservation);

router.get('/', getReservations);

router.get('/:id', getReservation);

// this uses cottage id so id is 1 or 2 or 3 ... not reservation it
router.get('/cottage/:id', getAllReservationsForCottage);

router.patch('/:id', updateReservation);

router.delete('/:id', deleteReservation);

module.exports = router;
