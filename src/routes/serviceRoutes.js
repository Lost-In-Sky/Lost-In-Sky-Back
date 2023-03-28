const express = require('express');
const router = express.Router();

const { getAllServicesForReservations } = require('../controllers/controller');
const {
  createService,
  getServices,
  getService,
  updateService,
  deleteService,
} = require('../controllers/reservationServicesController');

router.post('/', createService);

router.get('/', getServices);

router.get('/:id', getService);

router.get('/reservation/:id', getAllServicesForReservations);

router.patch('/:id', updateService);

router.delete('/:id', deleteService);

module.exports = router;
