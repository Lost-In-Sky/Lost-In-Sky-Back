const ReservationServices = require('../models/index').reservationservices;

async function createService(request, response) {
  const { date, status, type, servicePrice, reservationId } = request.body;

  await ReservationServices.bulkCreate([
    {
      date: date,
      status: status,
      type: type,
      servicePrice: servicePrice,
      reservationId: reservationId,
    },
  ]);

  response.status(201).send(`Service successfully created`);
}

async function getServices(request, response) {
  const data = await ReservationServices.findAll();
  response.status(200).json(data);
}

async function getService(request, response) {
  const data = await ReservationServices.findAll({
    where: { id: request.params.id },
  });
  response.status(200).json(data);
}

async function updateService(request, response) {
  const { id, name, capacity, price, numberOfFloors, space } = request.body;

  await ReservationServices.update(
    {
      name: name,
      capacity: capacity,
      price: price,
      numberOfFloors: numberOfFloors,
      space: space,
    },
    {
      where: {
        id: id,
      },
    }
  );

  response.status(202).send(`Service successfully updated`);
}

async function deleteService(request, response) {
  await ReservationServices.destroy({
    where: { id: request.params.id },
  });

  response.status(202).send(`Service successfully deleted`);
}

module.exports = {
  createService,
  getServices,
  getService,
  updateService,
  deleteService,
};
