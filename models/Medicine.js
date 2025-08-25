import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
  pharmacy: { type: mongoose.Schema.Types.ObjectId, ref: "Pharmacy" }
});

export default mongoose.model("Medicine", medicineSchema);
