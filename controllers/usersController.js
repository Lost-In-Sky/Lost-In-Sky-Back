const { createUser, getUsers, updateUser, deleteUser } = require('../services/users')

// Users Controller
exports.createUser = (request, response) => {
    createUser(request, response);
}

exports.getUsers = (request, response) => {
    getUsers(request, response);
}

exports.updateUser = (request, response) => {
    updateUser(request, response);
}

exports.deleteUser = (request, response) => {
    deleteUser(request, response);
}
