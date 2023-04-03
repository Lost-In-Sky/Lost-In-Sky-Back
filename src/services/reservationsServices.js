const ReservationServices = require('../models/index').reservationservices;
const checkForError = require('./errorHandler');

async function createService(request, response) {
  try {
    const { type, description, servicePrice } = request.body;

    const creation = await ReservationServices.bulkCreate([
      {
        type: type,
        description: description,
        servicePrice: servicePrice,
      },
    ]);

    await checkForError(creation);

    response.status(201).send(`Service successfully created`);
  } catch (error) {
    response.status(404).send('Not able to create service');
  }
}

async function getServices(request, response) {
  try {
    const data = await ReservationServices.findAll();

    await checkForError(data);

    response.status(200).json(data);
  } catch (error) {
    response.status(404).send('Not able to find services');
  }
}

async function getService(request, response) {
  try {
    const data = await ReservationServices.findAll({
      where: { id: request.params.id },
    });

    await checkForError(data);

    response.status(200).json(data);
  } catch (error) {
    response.status(404).send('Not able to find service');
  }
}

async function updateService(request, response) {
  try {
    const { type, description, servicePrice } = request.body;

    const edition = await ReservationServices.update(
      {
        type: type,
        description: description,
        servicePrice: servicePrice,
      },
      {
        where: {
          id: id,
        },
      }
    );

    await checkForError(edition);

    response.status(202).send(`Service successfully updated`);
  } catch (error) {
    response.status(404).send('Not able to update service');
  }
}

async function deleteService(request, response) {
  try {
    const deletion = await ReservationServices.destroy({
      where: { id: request.params.id },
    });

    await checkForError(deletion);

    response.status(202).send(`Service successfully deleted`);
  } catch (error) {
    response.status(404).send('Not able to delete service');
  }
}

module.exports = {
  createService,
  getServices,
  getService,
  updateService,
  deleteService,
};
