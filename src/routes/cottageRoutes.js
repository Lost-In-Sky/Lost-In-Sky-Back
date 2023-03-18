const express = require('express')
const router = express.Router()

const { createCottage, getCottages, getCottage, updateCottage, deleteCottage } = require('../controllers/cottagesController')

router.post('/api/cottage', createCottage)

router.get('/api/cottage', getCottages)

router.get('/api/cottage/:id', getCottage)

router.patch('/api/cottage', updateCottage)

router.delete('/api/cottage', deleteCottage)

module.exports = router
