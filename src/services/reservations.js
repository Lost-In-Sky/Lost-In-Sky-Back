const Reservations = require('../models/index').reservations;
const checkForError = require('./errorHandler');
const Cottages = require('../models/index').cottages;
const ReservationServices = require('../models/index').reservationservices;

async function calculateTotalPrice(
  cottageId,
  serviceId,
  checkInDate,
  checkOutDate
) {
  const cottagePrice = await Cottages.findOne({ where: { id: cottageId } });
  const servicePrice = await ReservationServices.findOne({
    where: { id: serviceId },
  });
  const date1 = new Date(checkInDate);
  const date2 = new Date(checkOutDate);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let totalPrice = cottagePrice.price * diffDays + servicePrice.servicePrice;

  return totalPrice;
}


async function createReservation(request, response) {
  try {
    const {
      approved,
      date,
      checkIn,
      checkOut,
      description,
      service,
      cottageId,
    } = request.body;

    let creation = await Reservations.bulkCreate([
      {
        approved: approved,
        date: date,
        checkIn: checkIn,
        checkOut: checkOut,
        totalPrice: await calculateTotalPrice(
          cottageId,
          service.id,
          checkIn,
          checkOut
        ),
        description: description,
        service: service,
        cottageId: cottageId,
      },
    ]);

    await checkForError(creation);

    response.status(201).send(`Reservation successfully created`);
  } catch (error) {
    response.status(404).send('Not able to create reservation');
  }
}

async function getReservations(request, response) {
  try {
    const data = await Reservations.findAll();

    await checkForError(data);

    response.status(200).json(data);
  } catch (error) {
    response.status(404).send('Not able to find reservations');
  }
}

async function getReservation(request, response) {
  try {
    const data = await Reservations.findAll({
      where: { id: request.params.id },
    });

    await checkForError(data);

    response.status(200).json(data);
  } catch (error) {
    response.status(404).send('Not able to find reservation');
  }
}

async function updateReservation(request, response) {
  try {
    const {
      id,
      approved,
      date,
      checkIn,
      checkOut,
      totalPrice,
      description,
      service,
      cottageId,
    } = request.body;

    const edition = await Reservations.update(
      {
        approved: approved,
        date: date,
        checkIn: checkIn,
        checkOut: checkOut,
        totalPrice: totalPrice,
        description: description,
        service: service,
        cottageId: cottageId,
      },
      {
        where: {
          id: id,
        },
      }
    );

    await checkForError(edition);

    response.status(202).send(`Reservations successfully updated`);
  } catch (error) {
    response.status(404).send('Not able to update reservation');
  }
}

async function deleteReservation(request, response) {
  try {
    const deletion = await Reservation.destroy({
      where: { id: request.params.id },
    });

    await checkForError(deletion);

    response.status(202).send(`Reservation successfully deleted`);
  } catch (error) {
    response.status(404).send('Not able to delete reservation');
  }
}

module.exports = {
  createReservation,
  getReservations,
  getReservation,
  updateReservation,
  deleteReservation,
};
