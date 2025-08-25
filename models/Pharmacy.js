import mongoose from "mongoose";

const pharmacySchema = new mongoose.Schema({
  name: String,
  address: String,
  location: { type: { type: String }, coordinates: [Number] }, // GeoJSON
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

pharmacySchema.index({ location: "2dsphere" });

export default mongoose.model("Pharmacy", pharmacySchema);
