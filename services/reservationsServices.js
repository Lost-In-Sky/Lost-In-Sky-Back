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

    response.status(201).send(`User successfully created`)
};

async function getServices(request, response) {
    const data = await ReservationService.findAll()
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
        where: { "id": request.body.id}
    })

    response.status(202).send(`Service successfully deleted`)
};

module.exports = {
    createService,
    getServices,
    updateService,
    deleteService
}