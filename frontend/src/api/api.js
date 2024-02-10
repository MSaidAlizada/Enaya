import axios from "axios";
import qs from "qs";

export const getPatientsByName = (name) => axios.get('http://localhost:5000/getpaitentsbyname/', qs.stringify(name), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
export const getPatients = () => axios.get('http://localhost:5000/getpaitents');
export const deletePatient = (id) => axios.post(`http://localhost:5000/deletepatient/${id}`);
export const getPaitentsByHospital = (id) => axios.delete(`http://localhost:5000/deleterecipe/${id}`);
export const createPatient = (newPatient) => axios.post('http://localhost:5000/createpatient/', qs.stringify(newPatient), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });