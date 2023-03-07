const express = require('express')
const router = express.Router()

const { getTableData, deleteTableData, createItem, updateItem, getAllReservationsForCottage } = require('../controllers/controller.js')

// in the above add getAllServicesForReservations

router.get('/get', getTableData)
router.post('/create', createItem)
router.delete('/delete', deleteTableData)
router.post('/edit', updateItem)
router.get('/getAllReservations/:id', getAllReservationsForCottage)
// router.get('/getAllServices', getAllServicesForReservations)

module.exports = router
