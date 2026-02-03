import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    role: "user"
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", form);
      alert("Registration successful. Please login.");
      navigate("/login");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "80px auto" }}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" onChange={handleChange} required />
        <br /><br />

        <input name="email" placeholder="Email" onChange={handleChange} required />
        <br /><br />

        <input name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
        <br /><br />

        <input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <div style={{ marginTop: "6px" }}>
          <label style={{ fontSize: "14px" }}>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />{" "}
            Show password
          </label>
        </div>

        <br />

        <select name="role" onChange={handleChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <br /><br />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}
