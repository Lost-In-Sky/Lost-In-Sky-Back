const Reservations = require('../models/index').reservations;
const ReservationServices = require('../models/index').reservationservices;
const Cottages = require('../models/index').cottages;
const { Op } = require('sequelize');
const checkForError = require('./errorHandler');

Reservations.belongsTo(Cottages, {
  foreignKey: 'cottageId',
});

async function getAllReservationsForCottage(request, response) {
  try {
    let data = [];
    let cotId = request.params.id;
    const reservations = await Reservations.findAll({
      where: { cottageId: cotId },
    });

    await checkForError(reservations);

    reservations.forEach((element) => {
      data.push({
        checkIn: element.checkIn,
        checkOut: element.checkOut,
      });
    });
    response.status(200).json(data);
  } catch (error) {
    response
      .status(404)
      .send('Not able to find any reservation connected to this cottage');
  }
}

async function getAllServicesForReservations(request, response) {
  try {
    const reservationId = request.params.id;
    const reservation = await Reservations.findOne({
      where: { id: reservationId },
    });
    let data = [];
    for (const element of reservation.service) {
      let item = await ReservationServices.findOne({
        where: { id: element },
      });
      data.push(item);
    }
    if (!reservation) {
      return response.status(404).json({ error: 'Reservation not found' });
    }

    if (!data) {
      return response.status(404).json({ error: 'Service not found' });
    }

    await checkForError(reservation);
    await checkForError(data);

    response.status(200).json(data);
  } catch (error) {
    response
      .status(404)
      .send('Not able to find any service connected to this reservation');
  }
}

async function getReservationsByDay(request, response) {
  try {
    const date = request.body.date;

    const data = await Reservations.findAll({
      where: {
        checkIn: { [Op.lte]: date },
        checkOut: { [Op.gt]: date },
      },
      order: [['date', 'ASC']],
    });

    await checkForError(data);

    response.status(200).send(data);
  } catch (error) {
    response.status(404).send('Could not find anything');
  }
}

async function getUnapprovedReservations(request, response) {
  try {
    const data = await Reservations.findAll({
      where: {
        approved: false,
      },
    });

    await checkForError(data);

    response.status(200).send(data);
  } catch (error) {
    response.status(404).send('No unapproved reservations');
  }
}

module.exports = {
  getAllReservationsForCottage,
  getAllServicesForReservations,
  getReservationsByDay,
  getUnapprovedReservations,
};
