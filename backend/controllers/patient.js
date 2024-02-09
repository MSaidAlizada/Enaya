import Patient from "../models/patient";

export async function getPaitents(req, res) {
    const patients = await Patient.find({});
    res.status(200).json(patients);
}

export async function getPaitentByName(req, res) {
    const name = req.body.name;
    const paitents = await Paitent.find({ name: name });
    res.status(200).json(paitents);
}

export async function deletePatient(req, res) {
    const id = req.params.id;
    const deleteditem = await Patient.findByIdAndDelete(id);
    res.json(deleteditem);
}

export async function getPaitentsByHospital(req, res) {
    const hospital = req.body.hospital;
    const paitents = await Paitent.find({ hospital: hospital });
    res.status(200).json(paitents);
}