const { createReservation, getReservations, updateReservation, deleteReservation } = require('../services/reservations')

// Reservations Controller
exports.createReservation = (request, response) => {
    createReservation(request, response);
}

exports.getReservations = (request, response) => {
    getReservations(request, response);
}

exports.updateReservation = (request, response) => {
    updateReservation(request, response);
}

exports.deleteReservation = (request, response) => {
    deleteReservation(request, response);
}
