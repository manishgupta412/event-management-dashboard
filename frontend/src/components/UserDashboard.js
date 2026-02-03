import { useEffect, useState } from "react";
import api from "../services/api";
import Card from "./Card";

export default function UserDashboard() {
  const [events, setEvents] = useState([]);
  const [registeredIds, setRegisteredIds] = useState([]);

  useEffect(() => {
    api.get("/events").then(res => setEvents(res.data));
    api.get("/registrations/mine").then(res =>
      setRegisteredIds(res.data.map(r => r.eventId._id))
    );
  }, []);

 const register = async (eventId) => {
  try {
    await api.post("/registrations", { eventId });
    setRegisteredIds([...registeredIds, eventId]);
  } catch (err) {
    alert(err.response?.data?.message || "Registration failed");
  }
};


  return (
    <div style={{ padding: 24 }}>
      <h2>Available Events</h2>

      {events.map(e => (
        <Card key={e._id}>
          <h3>{e.title}</h3>
          <p>{e.description}</p>

          {registeredIds.includes(e._id)
            ? <span style={{ color: "var(--success)" }}>✔ Registered</span>
            : <button onClick={() => register(e._id)}>Register</button>
          }
        </Card>
      ))}
    </div>
  );
}
