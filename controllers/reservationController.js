import Reservation from "../models/Reservation.js";

export const createReservation = async (req, res) => {
  try {
    const { medicineId, pharmacyId } = req.body;
    const reservation = await Reservation.create({
      user: req.user._id,
      medicine: medicineId,
      pharmacy: pharmacyId
    });
    res.json(reservation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
