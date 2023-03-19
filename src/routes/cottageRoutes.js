const express = require('express')
const router = express.Router()

const { createCottage, getCottages, getCottage, updateCottage, deleteCottage } = require('../controllers/cottagesController')

router.post('/', createCottage)

router.get('/', getCottages)

router.get('/:id', getCottage)

router.patch('/', updateCottage)

router.delete('/', deleteCottage)

module.exports = router
