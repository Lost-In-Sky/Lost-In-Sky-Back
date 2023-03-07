const { getTableData, deleteTableData, createItem, updateItem, getAllReservationsForCottage } = require('../services/dbServices.js');
// in the above add getAllServicesForReservations

exports.getTableData = (request, response) => {
  getTableData(request, response);
}

exports.createItem = (request, response) => {
  createItem(request, response);
}

exports.deleteTableData = (request, response) => {
  deleteTableData(request, response);
}

exports.updateItem = (request, response) => {
  updateItem(request, response);
}

exports.getAllReservationsForCottage = (request, response) => {
  getAllReservationsForCottage(request, response);
}

// exports.getAllReservationsForCottage = (request, response) => {
//   getAllReservationsForCottage(request, response);
// }
