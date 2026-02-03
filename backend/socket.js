module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("eventRegistered", () => {
      io.emit("updateEvents");
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};
