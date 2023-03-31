const Reservations = require('../models/index').reservations;
const ReservationServices = require('../models/index').reservationservices;
const Cottages = require('../models/index').cottages;
const checkForError = require('./errorHandler');

Reservations.belongsTo(Cottages, {
  foreignKey: 'cottageId',
});

async function getAllReservationsForCottage(request, response) {
  try {
    let dates = [];
    let cotId = request.params.id;
    const data = await Reservations.findAll({
      include: [
        {
          model: Cottages,
          required: true,
          where: { id: cotId },
        },
      ],
    });

    await checkForError(data);

    data.forEach((element) => {
      dates.push({
        checkIn: element.checkIn,
        checkOut: element.checkOut,
      });
    });
    response.status(200).json(dates);
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
    const serviceForThisReservation = await ReservationServices.findAll({
      where: { id: reservation[0].service.id },
    });

    if (!reservation) {
      return response.status(404).json({ error: 'Reservation not found' });
    }

    if (!serviceForThisReservation) {
      return response.status(404).json({ error: 'Service not found' });
    }

    await checkForError(reservation);
    await checkForError(serviceForThisReservation);

    response.status(200).json(serviceForThisReservation);
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
