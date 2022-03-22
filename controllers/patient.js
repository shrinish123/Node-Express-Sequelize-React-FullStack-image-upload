const db = require('../models')
const Patient = db.patient


//  create Patient
const addPatient = async (req, res) => {

    try{
        const {name,phone,emergency_contact,blood_group,age,gender} = req.body;
        const patientData = {
            name,
            phone,
            emergency_contact,
            blood_group,
            age,
            gender
        }

    const patient= await Patient.create(patientData)
    res.status(200).send(patient)
    console.log(patient)

    }catch(e) {
        console.log(e);
        res.status(500).send('Server Error',e);
    }
    

}

// get all Patients
const getAllPatients = async (req, res) => {
    
    try{
        const patients = await Patient.findAll({})
        res.status(200).send(patients);

    }catch(e){
        console.log(e);
        res.status(500).send('Server Error',e);
    }
    

}

//  get by ID
const getPatientById = async (req, res) => {

    try{
        const {id} = req.params;
        const product = await Patient.findOne({ where: { id: id }})
        res.status(200).send(product)

    }catch(e){
        console.log(e);
        res.status(500).send('Server Error',e);
    }
   

}

// update Patient
const updatePatient = async (req, res) => {

    try{
        const {id} = req.params;
    const patient = await Patient.update(req.body, { where: { id: id }})
    res.status(200).send(patient)

    }catch(e){
        console.log(e);
        res.status(500).send('Server Error',e);
    }
    
   

}

// 5. delete patient by ID
const deletePatient = async (req, res) => {
     try{
        const {id} = req.params
        const patient = await Patient.destroy({ where: { id: id }} )
        res.status(200).send('Product is deleted !',patient)

     }catch(e) {
           
        console.log(e);
        res.status(500).send('Server Error',e);
     }
    

}

module.exports = {
    addPatient,
    getAllPatients,
    getPatientById,
    updatePatient,
    deletePatient,
}