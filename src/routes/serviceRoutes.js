const express = require('express')
const router = express.Router()

const { createService, getServices, getService, updateService, deleteService } = require('../controllers/reservationServicesController')

router.post('/api/service', createService)

router.get('/api/service', getServices)

router.get('/api/service/:id', getService)

router.patch('/api/service', updateService)

router.delete('/api/service', deleteService)

module.exports = router
