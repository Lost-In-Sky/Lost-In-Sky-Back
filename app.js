const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const router = require('./routes/routes.js')

const app = express()
const port = 2000

app.use(cors({
  origin: ['http://localhost:3000','http://localhost:3001']
}))

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use('/', router)

app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}/`)
})