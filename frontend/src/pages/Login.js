import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "100px auto" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div
  style={{
    marginTop: "6px",
    display: "flex",
    justifyContent: "flex-end"
  }}
>
  <label
    style={{
      display: "flex",
      alignItems: "center",
      gap: "4px", // single small space
      fontSize: "14px",
      cursor: "pointer"
    }}
  >
    <input
      type="checkbox"
      checked={showPassword}
      onChange={() => setShowPassword(!showPassword)}
    />
    Show password
  </label>
</div>


        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
