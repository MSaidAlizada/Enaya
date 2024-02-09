import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    number: { type: String, required: true },
    bloodType: { type: String, required: false },
    chronicDiseases: { type: Array, required: false },
    allergies: { type: Array, required: false },
    onMedication: { type: Array, required: false },
    MedicalHistory: new mongoose.Schema({
        date: { type: Date, default: Date.now },
        description: { type: String },
        doctor: { type: String },
    }),
});

var Patient = mongoose.model('Patient', patientSchema);
export default Patient;