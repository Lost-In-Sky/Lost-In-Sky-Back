const Reservations = require('../models/index').reservations
const ReservationServices = require('../models/index').reservationservices
const Cottages = require('../models/index').cottages



Reservations.belongsTo(Cottages, {
  foreignKey: 'cottageId',
});
Reservations.hasMany(ReservationServices, {
  foreignKey: 'reservationId',
});

async function getAllReservationsForCottage(request, response) {
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
  data.forEach((element) => {
    dates.push({
      checkIn: element.checkIn,
      checkOut: element.checkOut,
    });
  });
  response.status(200).json(dates);
}

async function getAllServicesForReservations(request, response) {
  // let services = [];
  const reservationId = request.params.id;

  const reservation = await Reservations.findAll({
    where: { id: reservationId },
    include: { model: ReservationService },
  });

  if (!reservation) {
    return response.status(404).json({ error: 'Reservation not found' });
  }
  // code for just getting the services without reservation itself
  // reservation.forEach(element => {
  //     services.push(element.reservationservices)
  // });
  response.status(200).json(reservation);
}

module.exports = {
  getAllReservationsForCottage,
  getAllServicesForReservations,
};
