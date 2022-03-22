const express = require('express')
const cors = require('cors')


const app = express()
require("dotenv").config();
// middleware

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))


// routers
const patientRoutes = require('./routes/patient.js')

app.use('/api/patient', patientRoutes)


const PORT = process.env.NODE_DOCKER_PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})