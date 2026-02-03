import { useEffect, useState } from "react";
import api from "../services/api";
import Card from "../components/Card";

export default function MyRegistrations() {
  const [registrations, setRegistrations] = useState([]);

useEffect(() => {
  api.get("/registrations/mine")
    .then(res => setRegistrations(res.data))
    .catch(() => setRegistrations([]));
}, []);


  return (
    <div style={{ padding: 24 }}>
      <h2>My Registrations</h2>

      {registrations.length === 0 && (
        <p>You have not registered for any events yet.</p>
      )}

      {registrations.map(r => (
        <Card key={r._id}>
          <h3>{r.eventId.title}</h3>
          <p>{r.eventId.description}</p>
          <p>
            <strong>Date:</strong>{" "}
            {new Date(r.eventId.date).toDateString()}
          </p>
          <span style={{ color: "var(--success)" }}>
            ✔ Registered
          </span>
        </Card>
      ))}
    </div>
  );
}
