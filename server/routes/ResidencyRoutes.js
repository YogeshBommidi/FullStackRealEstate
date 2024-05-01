import express from "express";
import { createResidency, getByIdResidency, getAllResidiencies } from "../controllers/ResidencyController.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

router.post("/create",jwtCheck, createResidency);
router.get("/allresidencies", getAllResidiencies)
router.get("/:id", getByIdResidency)

export {router as residencyRoute}