const express = require('express');
const router = express.Router();

const {
  createCottage,
  getCottages,
  getCottage,
  updateCottage,
  deleteCottage,
} = require('../controllers/cottagesController');

router.post('/', createCottage);

router.get('/', getCottages);

router.get('/:id', getCottage);

router.patch('/:id', updateCottage);

router.delete('/:id', deleteCottage);

module.exports = router;
