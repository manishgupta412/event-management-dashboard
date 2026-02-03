import { useState } from "react";
import api from "../services/api";

export default function EventForm({ onCreate }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/events", form);
      onCreate(res.data);

      // clear form
      setForm({
        title: "",
        description: "",
        date: "",
        time: "",
        location: ""
      });
    } catch {
      alert("Failed to create event");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        name="title"
        placeholder="Event Title"
        value={form.title}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Event Description"
        value={form.description}
        onChange={handleChange}
        rows="3"
        required
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
      />

      <input
        type="time"
        name="time"
        value={form.time}
        onChange={handleChange}
        required
      />

      <input
        name="location"
        placeholder="Location"
        value={form.location}
        onChange={handleChange}
        required
      />

      <button type="submit">Create Event</button>
    </form>
  );
}

const formStyle = {
  background: "white",
  padding: "15px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  maxWidth: "400px"
};
