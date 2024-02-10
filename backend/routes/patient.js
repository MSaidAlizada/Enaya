import { getPatients, getPatientByName, deletePatient, createPatient } from "../controllers/patient.js";
import express from "express";

const router = express.Router();

router.get("/getpatients", getPatients);
router.get("/getpatientsbyname", getPatientByName);
router.delete("/deletepatient/:id", deletePatient);
router.post("/createpatient", createPatient);

export default router;