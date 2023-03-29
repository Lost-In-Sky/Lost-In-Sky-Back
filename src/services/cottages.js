const Cottages = require('../models/index').cottages;
const checkForError = require('./errorHandler');

async function createCottage(request, response) {
  try {
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
  } catch (error) {
    response.status(404).send('Not able to create cottage');
  }
}

async function getCottages(request, response) {
  try {
    const data = await Cottages.findAll();

    await checkForError(data);

    response.status(200).json(data);
  } catch (error) {
    response.status(404).send('Not able to find cottages');
  }
}

async function getCottage(request, response) {
  try {
    const data = await Cottages.findAll({ where: { id: request.params.id } });

    await checkForError(data);

    response.status(200).json(data);
  } catch (error) {
    response.status(404).send('Not able to find cottage');
  }
}

async function updateCottage(request, response) {
  try {
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

    await checkForError(edition);

    response.status(202).send(`Cottages successfully created`);
  } catch (error) {
    response.status(404).send('Not able to update cottage');
  }
}

async function deleteCottage(request, response) {
  try {
    const deletion = await Cottages.destroy({
      where: { id: request.params.id },
    });

    await checkForError(deletion);

    response.status(202).send(`Cottage successfully deleted`);
  } catch (error) {
    response.status(404).send('Not able to delete cottage');
  }
}

module.exports = {
  createCottage,
  getCottages,
  getCottage,
  updateCottage,
  deleteCottage,
};
