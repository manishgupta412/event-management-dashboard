const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  registerEvent,
  myRegistrations
} = require("../controllers/registrationController");

router.post("/", auth(["user"]), registerEvent);
router.get("/mine", auth(["user"]), myRegistrations);

module.exports = router;
