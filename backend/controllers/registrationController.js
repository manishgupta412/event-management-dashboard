const Registration = require("../models/Registration");

exports.registerEvent = async (req, res) => {
  const { eventId } = req.body;

  const exists = await Registration.findOne({
    userId: req.user.id,
    eventId
  });

  if (exists) {
    return res.status(400).json({ message: "Already registered" });
  }

  const reg = await Registration.create({
    userId: req.user.id,
    eventId
  });

  res.json({ message: "Registered successfully", reg });
};

exports.myRegistrations = async (req, res) => {
  const regs = await Registration.find({
    userId: req.user.id
  }).populate("eventId");

  res.json(regs);
};
