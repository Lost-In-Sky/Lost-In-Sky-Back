const {
  getAllReservationsForCottage,
  getAllServicesForReservations,
} = require('../services/dbServices');
exports.getAllReservationsForCottage = (request, response) => {
  getAllReservationsForCottage(request, response);
};

exports.getAllServicesForReservations = (request, response) => {
  getAllServicesForReservations(request, response);
};
