import { useEffect, useState } from "react";
import api from "../services/api";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function EventList() {
  const [events, setEvents] = useState([]);

  const loadEvents = async () => {
    const res = await api.get("/events");
    setEvents(res.data);
  };

  useEffect(() => {
    loadEvents();

    socket.on("updateEvents", loadEvents);

    return () => socket.off("updateEvents");
  }, []);

  const register = async (id) => {
    await api.post(`/events/${id}/register`);
    socket.emit("eventRegistered");
  };

  return (
    <div>
      <h2>Available Events</h2>
      {events.map((e) => (
        <div key={e._id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h3>{e.title}</h3>
          <p>{e.description}</p>
          <p>Registrations: {e.registrations}</p>
          <button onClick={() => register(e._id)}>Register</button>
        </div>
      ))}
    </div>
  );
}
