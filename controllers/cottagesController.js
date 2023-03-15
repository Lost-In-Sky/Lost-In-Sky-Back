const { createCottage, getCottages, updateCottage, deleteCottage } = require('../services/cottages')

// Cottages Controller
exports.createCottage = (request, response) => {
    createCottage(request, response);
}

exports.getCottages = (request, response) => {
    getCottages(request, response);
}

exports.updateCottage = (request, response) => {
    updateCottage(request, response);
}

exports.deleteCottage = (request, response) => {
    deleteCottage(request, response);
}
