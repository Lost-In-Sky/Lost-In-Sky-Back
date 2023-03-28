const express = require('express');
const router = express.Router();

const userRouter = require('./userRoutes');
const cottageRouter = require('./cottageRoutes');
const reservationRouter = require('./reservationRoutes');
const serviceRouter = require('./serviceRoutes');

router.use('/api/reservation', reservationRouter);
router.use('/api/cottage', cottageRouter);
router.use('/api/user', userRouter);
router.use('/api/service', serviceRouter);

module.exports = router;
