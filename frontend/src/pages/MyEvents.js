import { useEffect, useState } from "react";
import api from "../services/api";

export default function MyEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.get("/events/mine")
      .then(res => setEvents(res.data))
      .catch(() => setEvents([]));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Events</h2>

      {events.length === 0 && <p>No events created yet.</p>}

      {events.map(event => (
        <div key={event._id} style={cardStyle}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>{event.date} | {event.time} | {event.location}</p>
        </div>
      ))}
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "15px",
  marginBottom: "15px",
  borderRadius: "8px"
};
