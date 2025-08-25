import Medicine from "../models/Medicine.js";
import Pharmacy from "../models/Pharmacy.js";

export const addMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.create({ ...req.body, pharmacy: req.user._id });
    res.json(medicine);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const searchMedicine = async (req, res) => {
  try {
    const { name } = req.query;
    const medicines = await Medicine.find({ name: { $regex: name, $options: "i" } }).populate("pharmacy");
    res.json(medicines);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
