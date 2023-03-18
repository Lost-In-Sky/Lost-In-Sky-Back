const { ReservationService } = require('./dbServices')

async function createService(request, response) {
    const { date, status, type, servicePrice, reservationId } = request.body

    await ReservationService.bulkCreate([
        {
            date: date ,
            status: status,
            type: type,
            servicePrice: servicePrice,
            reservationId: reservationId,
        }])

    response.status(201).send(`Service successfully created`)
};

async function getServices(request, response) {
    const data = await ReservationService.findAll()
    response.status(200).json(data)
}

async function getService(request, response) {
    const data = await ReservationService.findAll({where: { "id": request.params.id}})
    response.status(200).json(data)
}

async function updateService(request,response) {
    const { id, name, capacity, price, numberOfFloors, space } = request.body


    await ReservationService.update(
        {
            name: name,
            capacity: capacity,
            price: price,
            numberOfFloors: numberOfFloors,
            space: space,
        },
        {
            where: {
                "id": id
            }
        }
    )

    response.status(202).send(`Service successfully updated`)
}

async function deleteService(request,response) {
    await ReservationService.destroy({
        where: { "id": request.params.id}
    })

    response.status(202).send(`Service successfully deleted`)
};

module.exports = {
    createService,
    getServices,
    getService,
    updateService,
    deleteService
}