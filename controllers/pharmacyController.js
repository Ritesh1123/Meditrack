import Pharmacy from "../models/Pharmacy.js";

export const addPharmacy = async (req, res) => {
  try {
    const pharmacy = await Pharmacy.create({ ...req.body, owner: req.user._id });
    res.json(pharmacy);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
