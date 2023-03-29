const Reservations = require('../models/index').reservations;
const checkForError = require('./errorHandler');

async function createReservation(request, response) {
  try {
    const {
      approved,
      date,
      checkIn,
      checkOut,
      totalPrice,
      description,
      cottageId,
    } = request.body;

    const creation = await Reservations.bulkCreate([
      {
        approved: approved,
        date: date,
        checkIn: checkIn,
        checkOut: checkOut,
        totalPrice: totalPrice,
        description: description,
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
