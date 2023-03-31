const Users = require('../models/index').users;
const checkForError = require('./errorHandler');

async function createUser(request, response) {
  try {
    const { firstName, lastName, email, password, type } = request.body;

    const creation = await Users.bulkCreate([
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        type: type,
      },
    ]);

    await checkForError(creation);

    response.status(201).send(`User successfully created`);
  } catch (error) {
    response.status(404).send('Not able to create users');
  }
}

async function getUsers(request, response) {
  try {
    const data = await Users.findAll();

    await checkForError(data);

    response.status(200).json(data);
  } catch (error) {
    response.status(404).send('Not able to find users');
  }
}

async function getUser(request, response) {
  try {
    const data = await Users.findAll({ where: { id: request.params.id } });

    await checkForError(data);

    response.status(200).json(data);
  } catch (error) {
    response.status(404).send('Not able to find user');
  }
}

async function updateUser(request, response) {
  try {
    const { id, firstName, lastName, email, password, type } = request.body;

    const edition = await Users.update(
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        type: type,
      },
      {
        where: {
          id: id,
        },
      }
    );

    await checkForError(edition);

    response.status(202).send(`User successfully updated`);
  } catch (error) {
    response.status(404).send('Not able to update user');
  }
}

async function deleteUser(request, response) {
  try {
    const deletion = await Users.destroy({
      where: { id: request.params.id },
    });

    await checkForError(deletion);

    response.status(202).send(`User successfully deleted`);
  } catch (error) {
    response.status(404).send('Not able to delete user');
  }
}

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
