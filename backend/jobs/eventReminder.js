const cron = require("node-cron");
const Registration = require("../models/Registration");
const sendMail = require("../utils/mailer");

cron.schedule("*/10 * * * *", async () => {
  // runs every 10 minutes
  const now = new Date();
  const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000);

  const registrations = await Registration.find()
    .populate("user")
    .populate("event");

  for (const reg of registrations) {
    const eventTime = new Date(`${reg.event.date} ${reg.event.time}`);

    if (
      eventTime > now &&
      eventTime <= oneHourLater &&
      !reg.reminderSent
    ) {
      await sendMail({
        to: reg.user.email,
        subject: `Reminder: ${reg.event.title}`,
        text: `Hi ${reg.user.name},

This is a reminder that your event "${reg.event.title}" starts at ${reg.event.time}.

Location: ${reg.event.location}

See you there!`
      });

      reg.reminderSent = true;
      await reg.save();
    }
  }
});
