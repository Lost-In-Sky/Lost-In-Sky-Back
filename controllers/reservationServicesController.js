const { createService, getServices, updateService, deleteService } = require('../services/reservationsServices')

// ReservationsServices Controller
exports.createService = (request, response) => {
    createService(request, response);
}

exports.getServices = (request, response) => {
    getServices(request, response);
}

exports.updateService = (request, response) => {
    updateService(request, response);
}

exports.deleteService = (request, response) => {
    deleteService(request, response);
}
