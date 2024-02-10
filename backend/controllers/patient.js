import Patient from "../models/patient.js";

export async function getPatients(req, res) {
    const patients = await Patient.find({});
    res.status(200).json(patients);
}

export async function getPatientByName(req, res) {
    const name = req.body.name;
    const paitents = await Patient.find({ name: name });
    res.status(200).json(patients);
}

export async function deletePatient(req, res) {
    const id = req.params.id;
    const deleteditem = await Patient.findByIdAndDelete(id);
    res.json(deleteditem);
}

export async function getPatientsByHospital(req, res) {
    const hospital = req.body.hospital;
    const patients = await Patient.find({ hospital: hospital });
    res.status(200).json(patients);
}

export async function createPatient(req,res) {
    const hospital = req.body.hospital;
    const name = req.body.name;
    const age = req.body.age;
    const number = req.body.number;
    const EmergencyContact = req.body.EmergencyContact;
    const bloodType = req.body.bloodType;
    const chronicDiseases = req.body.chronicDiseases;
    const allergies = req.body.allergies;
    const onMedication = req.body.onMedication;
    const MedicalHistoryDate = req.body.MedicalHistoryDate
    const MedicalHistoryDescription = req.body.MedicalHistoryDescription
    const MedicalHistoryDoctor = req.body.MedicalHistoryDoctor
    const newPatient = new Patient({hospital: hospital, name: name, age: age, number: number,EmergencyContact:EmergencyContact, bloodType: bloodType, chronicDiseases: chronicDiseases, allergies : allergies, onMedication : onMedication , MedicalHistory : {date : MedicalHistoryDate, description : MedicalHistoryDescription, doctor : MedicalHistoryDoctor} });
    await newPatient.save();
    res.status(201).json(newPatient);
}