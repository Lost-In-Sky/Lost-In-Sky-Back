const {
  getAllReservationsForCottage,
  getAllServicesForReservations,
  getReservationsByDay,
  getUnapprovedReservations
} = require('../services/dbServices');

exports.getAllReservationsForCottage = (request, response) => {
  getAllReservationsForCottage(request, response);
};

exports.getAllServicesForReservations = (request, response) => {
  getAllServicesForReservations(request, response);
};

exports.getReservationsByDay = (request, response) => {
  getReservationsByDay(request, response);
};

exports.getUnapprovedReservations = (request, response) => {
  getUnapprovedReservations(request, response);
};
