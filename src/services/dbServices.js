const Reservations = require('../models/index').reservations;
const ReservationServices = require('../models/index').reservationservices;
const Cottages = require('../models/index').cottages;
const checkForError = require('./errorHandler');

Reservations.belongsTo(Cottages, {
  foreignKey: 'cottageId',
});

async function getAllReservationsForCottage(request, response) {
  try {
    let data = [];
    let cotId = request.params.id;
    console.log(cotId);
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
    const reservation = await Reservations.findAll({
      where: { id: reservationId },
    });
    const data = await ReservationServices.findAll({
      where: { id: reservation[0].service.id },
    });

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

module.exports = {
  getAllReservationsForCottage,
  getAllServicesForReservations,
};
