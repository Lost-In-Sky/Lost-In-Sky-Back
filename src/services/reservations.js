const { Reservations } = require('./dbServices')


async function createReservation(request, response) {
    const { approved , date , checkIn , checkOut , totalPrice , description, cottageId } = request.body

    await Reservations.bulkCreate([
        {
            approved: approved,
            date: date ,
            checkIn: checkIn ,
            checkOut: checkOut ,
            totalPrice: totalPrice ,
            description: description,
            cottageId: cottageId,
        }])

    response.status(201).send(`Reservation successfully created`)
};

async function getReservations(request, response) {
    const data = await Reservations.findAll()
    response.status(200).json(data)
}

async function getReservation(request, response) {
    const data = await Reservations.findAll({where: { "id": request.params.id}})
    response.status(200).json(data)
}

async function updateReservation(request,response) {
    const { id, approved , date , checkIn , checkOut , totalPrice , description, cottageId } = request.body

    await Reservations.update(
        {
            approved: approved,
            date: date ,
            checkIn: checkIn ,
            checkOut: checkOut ,
            totalPrice: totalPrice ,
            description: description,
            cottageId: cottageId,
        },
        {
            where: {
                "id": id
            }
        }
    )

    response.status(202).send(`Reservations successfully updated`)
}

async function deleteReservation(request,response) {
    await Reservation.destroy({
        where: { "id": request.params.id}
    })

    response.status(202).send(`Reservation successfully deleted`)
};

module.exports = {
    createReservation,
    getReservations,
    getReservation,
    updateReservation,
    deleteReservation
}