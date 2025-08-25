import express from "express";
import protect from "../middleware/authMiddleware.js";
import { addMedicine, searchMedicine } from "../controllers/medicineController.js";

const router = express.Router();
router.post("/", protect, addMedicine);
router.get("/search", searchMedicine);

export default router;
