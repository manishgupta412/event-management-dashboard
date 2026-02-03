import { useState } from "react";
import api from "../services/api";
import Card from "./Card";

export default function AdminDashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const createEvent = async () => {
    await api.post("/events", { title, description, date });
    alert("Event created");
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Admin Dashboard</h2>

      <Card>
        <h3>Create Event</h3>
        <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
        <br /><br />
        <input placeholder="Description" onChange={e => setDescription(e.target.value)} />
        <br /><br />
        <input type="date" onChange={e => setDate(e.target.value)} />
        <br /><br />
        <button onClick={createEvent}>Create Event</button>
      </Card>
    </div>
  );
}
