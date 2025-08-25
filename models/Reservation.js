import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  medicine: { type: mongoose.Schema.Types.ObjectId, ref: "Medicine" },
  pharmacy: { type: mongoose.Schema.Types.ObjectId, ref: "Pharmacy" },
  status: { type: String, enum: ["pending", "completed"], default: "pending" }
}, { timestamps: true });

export default mongoose.model("Reservation", reservationSchema);
