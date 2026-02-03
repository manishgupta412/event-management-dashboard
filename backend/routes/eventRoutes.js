const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  createEvent,
  getAllEvents,
  getMyEvents
} = require("../controllers/eventController");

// Admin creates event
router.post("/", auth(["admin"]), createEvent);

// Everyone sees all events
router.get("/", auth(["admin", "user"]), getAllEvents);

// Admin sees only their events
router.get("/mine", auth(["admin"]), getMyEvents);

module.exports = router;
