const Users = require('../models/index').users;
const checkForError = require('./errorHandler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/authconfig');

async function createUser(request, response) {
  try {
    const { firstName, lastName, email, password, password_confirm, type } =
      request.body;
    const data = await Users.findAll({ where: { email: email } });

    if (data.length > 0) {
      response.status(400).send('This email is already in use');
    } else if (password !== password_confirm) {
      response.status(400).send('Passwords do not match!');
    } else {
      let hashedPassword = await bcrypt.hash(password, 8);

      await Users.bulkCreate([
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: hashedPassword,
          type: type,
        },
      ]);

      response.status(201).send(`User successfully created`);
    }
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
    const id = request.params.id;
    const { firstName, lastName, email, password, password_confirm, type } = request.body;
    let updatedHashedPassword;
    if (password && password_confirm) {
      if (password !== password_confirm) {
        response.status(400).send('Passwords do not match!');
      } else {
          updatedHashedPassword = await bcrypt.hash(password, 8);
      }
    }

    const edition = await Users.update(
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: updatedHashedPassword,
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

async function signIn(request, response) {
  try {
    const user = await Users.findOne({
      where: {
        email: request.body.email,
      },
    });

    if (!user) {
      return response.status(404).send({ message: 'User Not found.' });
    }

    const passwordIsValid = bcrypt.compareSync(
      request.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return response.status(401).send({
        message: 'Invalid Password!',
      });
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400, // 24 hours
    });

    request.session.token = token;

    return response.status(200).send({
      id: user.id,
      firstName: user.firstName,
      email: user.email,
      type: user.type,
    });
  } catch (error) {
    return response.status(500).send({ message: error.message });
  }
}

async function signOut(request, response) {
  try {
    request.session = null;
    return response.status(200).send({
      message: "You've been signed out!",
    });
  } catch (err) {
    this.next(err);
  }
}

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  signIn,
  signOut,
};
