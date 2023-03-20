const { Users } = require('./dbServices')

async function createUser(request, response) {
    const { firstName, lastName, email, password, type } = request.body

    await Users.bulkCreate([
        {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            type: type,
        }])

    response.status(201).send(`User successfully created`)
};

async function getUsers(request, response) {
    const data = await Users.findAll()
    response.status(200).json(data)
}

async function getUser(request, response) {
    const data = await Users.findAll({where: { "id": request.params.id}})
    response.status(200).json(data)
}

async function updateUser(request,response) {
    const { id, firstName, lastName, email, password, type } = request.body

    await Users.update(
        {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            type: type,
        },
        {
            where: {
                "id": id
            }
        }
    )

    response.status(202).send(`User successfully updated`)
}

async function deleteUser(request,response) {
    await Users.destroy({
        where: { "id": request.params.id}
    })

    response.status(202).send(`User successfully deleted`)
};

module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
}