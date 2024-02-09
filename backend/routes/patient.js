import { getPaitents, getPaitentByName, deletePatient } from "../controllers/patient.js";
import express from "express";

const router = express.router();

router.get("/getpaitents", getPaitents);
router.get("/getpaitentsbyname", getPaitentByName);
router.delete("/deletepaitent/:id", deletePatient);

export default router;