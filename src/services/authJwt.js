const jwt = require('jsonwebtoken');
const config = require('../config/authconfig');
const Users = require('../models/index').users;

function verifyToken(request, response, next) {
  let token = request.session.token;

  if (!token) {
    return response.status(403).send({
      message: 'No token provided!',
    });
  }

  jwt.verify(token, config.secret, (err) => {
    if (err) {
      return response.status(401).send({
        message: 'Unauthorized!',
      });
    }
    next();
  });
}

async function isAdmin(request, response, next) {
  try {
    const data = await Users.findAll({ where: { email: request.body.email } });

    if (data[0].type === 'admin') {
      return next();
    }

    return response.status(403).send({
      message: 'Require Admin Type!',
    });
  } catch (error) {
    return response.status(500).send({
      message: 'Unable to validate user type!',
    });
  }
}

async function isStandard(request, response, next) {
  try {
    const data = await Users.findAll({ where: { email: request.body.email } });

    if (data[0].type === 'standard') {
      return next();
    }
    return response.status(403).send({
      message: 'Require Standard Type!',
    });
  } catch (error) {
    return response.status(500).send({
      message: 'Unable to validate standard type!',
    });
  }
}

async function isStandardOrAdmin(request, response, next) {
  try {
    const data = await Users.findAll({ where: { email: request.body.email } });

    if (data[0].type === 'admin') {
      return next();
    }

    if (data[0].type === 'standard') {
      return next();
    }

    return response.status(403).send({
      message: 'Require Standard or Admin Type!',
    });
  } catch (error) {
    return response.status(500).send({
      message: 'Unable to validate standard or admin type!',
    });
  }
}

const authJwt = {
  verifyToken,
  isAdmin,
  isStandard,
  isStandardOrAdmin,
};

module.exports = authJwt;
