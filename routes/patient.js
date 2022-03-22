// import controllers review, products
const patientController = require('../controllers/patient.js')

// router
const router = require('express').Router()

// use routers
router.post('/create', patientController.addPatient)
router.get('/getAll', patientController.getAllPatients)
router.get('/:id', patientController.getPatientById)
router.put('/:id', patientController.updatePatient)
router.delete('/:id', patientController.deletePatient)

module.exports = router