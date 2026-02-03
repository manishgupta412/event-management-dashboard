const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");
const connectDB = require("./config/db");
require("./jobs/eventReminder");
const testEmailRoutes = require("./routes/testEmail");


console.log("Starting server...");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/registrations", require("./routes/registrationRoutes"));
app.use("/api", testEmailRoutes);

const server = http.createServer(app);

const io = socketIO(server, {
  cors: {
    origin: "*"
  }
});

require("./socket")(io);

server.listen(5000, () => {
  console.log("Backend running on port 5000");
});
