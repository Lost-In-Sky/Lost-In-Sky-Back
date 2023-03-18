const express = require('express')
const router = express.Router()

const { createUser, getUsers, getUser, updateUser, deleteUser } = require('../controllers/usersController')

router.post('/api/user', createUser)

router.get('/api/user', getUsers)

router.get('/api/user/:id', getUser)

router.patch('/api/user', updateUser)

router.delete('/api/user', deleteUser)

module.exports = router
