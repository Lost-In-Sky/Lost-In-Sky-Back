const { createReservation, getReservations, getReservation, updateReservation, deleteReservation } = require('../services/reservations')

// Reservations Controller
exports.createReservation = (request, response) => {
    createReservation(request, response);
}

exports.getReservations = (request, response) => {
    getReservations(request, response);
}

exports.getReservation = (request, response) => {
    getReservation(request, response);
}

exports.updateReservation = (request, response) => {
    updateReservation(request, response);
}

exports.deleteReservation = (request, response) => {
    deleteReservation(request, response);
}
