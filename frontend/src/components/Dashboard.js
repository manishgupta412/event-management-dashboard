import { useEffect, useState } from "react";
import api from "../services/api";
import EventForm from "./EventForm";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [events, setEvents] = useState([]);
  const [registeredIds, setRegisteredIds] = useState([]);

  useEffect(() => {
    // Load all events
    api.get("/events")
      .then(res => setEvents(res.data))
      .catch(() => setEvents([]));

    // Load user's registrations
    if (user.role === "user") {
      api.get("/registrations/mine")
        .then(res =>
          setRegisteredIds(res.data.map(r => r.event._id))
        )
        .catch(() => setRegisteredIds([]));
    }
  }, [user.role]);

  const registerForEvent = async (eventId) => {
    try {
      await api.post("/registrations", { eventId });
      setRegisteredIds([...registeredIds, eventId]);
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* ADMIN EVENT CREATION */}
      {user.role === "admin" && (
        <>
          <h2>Create Event</h2>
          <EventForm onCreate={(e) => setEvents([e, ...events])} />
          <hr />
        </>
      )}

      <h2>Available Events</h2>

      {events.map(event => {
        const isRegistered = registeredIds.includes(event._id);

        return (
          <div key={event._id} style={cardStyle}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>

            <p style={{ fontSize: "14px", color: "#555" }}>
              {event.date} {event.time && `| ${event.time}`} {event.location && `| ${event.location}`}
            </p>

            <small>
              Created by: {event.createdBy?.name}
            </small>

            {/* USER REGISTER BUTTON */}
            {user.role === "user" && (
              <div style={{ marginTop: "10px" }}>
                <button
                  disabled={isRegistered}
                  onClick={() => registerForEvent(event._id)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "6px",
                    border: "none",
                    background: isRegistered ? "#9ca3af" : "#2563eb",
                    color: "white",
                    cursor: isRegistered ? "not-allowed" : "pointer"
                  }}
                >
                  {isRegistered ? "Registered" : "Register"}
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "15px",
  marginBottom: "15px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
};
