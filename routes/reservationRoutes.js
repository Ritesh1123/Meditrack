import express from "express";
import protect from "../middleware/authMiddleware.js";
import { createReservation } from "../controllers/reservationController.js";

const router = express.Router();
router.post("/", protect, createReservation);

export default router;
