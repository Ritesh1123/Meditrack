import express from "express";
import protect from "../middleware/authMiddleware.js";
import { addPharmacy } from "../controllers/pharmacyController.js";

const router = express.Router();
router.post("/", protect, addPharmacy);

export default router;
