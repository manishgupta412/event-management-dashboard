const Event = require("../models/Event");

// ADMIN: create event
exports.createEvent = async (req, res) => {
  try {
    const event = await Event.create({
      ...req.body,
      createdBy: req.user.id
    });
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// USER + ADMIN: view all events
exports.getAllEvents = async (req, res) => {
  const events = await Event.find().populate("createdBy", "name email");
  res.json(events);
};

// ADMIN: view own events
exports.getMyEvents = async (req, res) => {
  const events = await Event.find({ createdBy: req.user.id });
  res.json(events);
};
