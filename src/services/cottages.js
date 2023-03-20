const { Cottages } = require('./dbServices')

async function createCottage(request, response) {
    const { name, capacity, price, numberOfFloors, space } = request.body

    await Cottages.bulkCreate([
        {
            name: name,
            capacity: capacity,
            price: price,
            numberOfFloors: numberOfFloors,
            space: space,
        }])

    response.status(201).send(`Cottage successfully created`)
};

async function getCottages(request, response) {
    const data = await Cottages.findAll()
    response.status(200).json(data)
}

async function getCottage(request, response) {
    const data = await Cottages.findAll({where: { "id": request.params.id}})
    response.status(200).json(data)
}

async function updateCottage(request,response) {
    const { id, name, capacity, price, numberOfFloors, space } = request.body


    await Cottages.update(
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

    response.status(202).send(`Cottages successfully updated`)
}

async function deleteCottage(request,response) {
    await Cottages.destroy({
        where: { "id": request.params.id}
    })

    response.status(202).send(`Cottage successfully deleted`)

};


module.exports = {
    createCottage,
    getCottages,
    getCottage,
    updateCottage,
    deleteCottage
}