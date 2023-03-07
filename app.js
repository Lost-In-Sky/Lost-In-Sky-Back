const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { getTableData, deleteTableData, createItem, updateItem, getAllReservationsForCottage } = require('./services/dbServices');

// in the above add getAllServicesForReservations

const app = express()
const port = 2000

app.use(cors({
  origin: ['http://localhost:3000','http://localhost:3001']
}));

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/get', (request, response) => {
  getTableData(request, response);
})
app.post('/create', (request, response) => {
  createItem(request, response)
})
app.delete('/delete', (request, response) => {
  deleteTableData(request, response)
})
app.post('/edit', (request,response) => {
  updateItem(request,response)
})
app.get('/getAllReservations/:id', (request, response) => {
  getAllReservationsForCottage(request, response);
})
// app.get('/getAllServices', (request,response) => {
//   getAllServicesForReservations(request,response)
// })


app.listen(port, () => {
    console.log(`App running on port http://localhost:${port}/`)
  })