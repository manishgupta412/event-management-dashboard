import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "var(--background)"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          width: "360px",
          textAlign: "center"
        }}
      >
        <h1 style={{ color: "var(--primary)" }}>Event Manager</h1>
        <p style={{ color: "var(--muted)", marginBottom: "30px" }}>
          Create, manage and register for events easily
        </p>

        <button
          style={{ width: "100%", marginBottom: "12px" }}
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        <button
          style={{
            width: "100%",
            background: "var(--secondary)"
          }}
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </div>
  );
}
