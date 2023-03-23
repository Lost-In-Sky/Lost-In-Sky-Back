const Cottages = require('../models/index').cottages;
const checkForError = require('./errorHandler');

async function createCottage(request, response) {
  const { name, capacity, price, numberOfFloors, space } = request.body;

  const creation = await Cottages.create({
    name: name,
    capacity: capacity,
    price: price,
    numberOfFloors: numberOfFloors,
    space: space,
  });

  await checkForError(creation);

  response.status(201).send(`Cottage successfully created`);
}


/* try {
    const foundLogs = await Dailylogs.findAll({
      where: {
        user_id: user_id,
        timestamp: { [Op.between]: [start_date, end_date] },
      },
    });

    res.status(STATUS.OK).send(foundLogs);
  } catch (err) {
    throw new BadRequest('Error getting the logs ' + err);
  } */

async function getCottages(request, response) {
  const data = await Cottages.findAll();

  await checkForError(data);

  response.status(200).json(data);
}

async function getCottage(request, response) {
  try {
    const data = await Cottages.findAll({ where: { id: request.params.id } });
    if (data.length === 0) {
      throw new Error();
    }
    response.status(200).json(data);
  } catch (e) {
    response
      .status(404)
      .send("Unable to find cottage or the cottage doesn't exist");
  }
}

async function updateCottage(request, response) {
  const { name, capacity, price, numberOfFloors, space } = request.body;

  const edition = await Cottages.update(
    {
      name: name,
      capacity: capacity,
      price: price,
      numberOfFloors: numberOfFloors,
      space: space,
    },
    {
      where: {
        id: request.params.id,
      },
    }
  );

  if (edition) {
    response.status(202).send(`Cottages successfully created`);
  }

  response.status(404).send('Unable to create cottage');
}

async function deleteCottage(request, response) {
  const deletion = await Cottages.destroy({
    where: { id: request.params.id },
  });

  if (deletion) {
    response.status(202).send(`Cottage successfully deleted`);
  }

  response.status(404).send('Unable to find cottage');
}

module.exports = {
  createCottage,
  getCottages,
  getCottage,
  updateCottage,
  deleteCottage,
};
