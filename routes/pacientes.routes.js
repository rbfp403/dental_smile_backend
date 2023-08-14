import { Router } from "express";

import {
  getAllPacientes,
  getPacienteID,
  createPaciente,
  deletePaciente,
  updatePaciente,
} from "../controllers/pacientes.controllers.js";

import {
  getAntecedentes,
  createAntecedente,
  updateAntecedente,
  deleteAntecedente,
} from "../controllers/antecedentes.controllers.js";

// Creación del enrutador
const router = Router();

// Rutas relacionadas con pacientes
router.get("/getPacientes", getAllPacientes);
router.get("/paciente/:id_paciente", getPacienteID);
router.post("/createPaciente", createPaciente);
router.put("/updatePaciente/:id_paciente", updatePaciente);
router.delete("/deletePaciente/:id_paciente", deletePaciente);

// Rutas relacionadas con antecedentes
router.get("/paciente/:id_paciente/getAntecedentes/:tipo", getAntecedentes);
router.post("/paciente/:id_paciente/createAntecedente", createAntecedente);
router.put("/paciente/updateAntecedente/:id_antecedente", updateAntecedente);
router.delete("/paciente/deleteAntecedente/:id_antecedente", deleteAntecedente);

// Exportar el enrutador
export default router;
