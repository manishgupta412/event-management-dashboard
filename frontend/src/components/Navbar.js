import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Hide navbar on landing page
  if (location.pathname === "/") return null;

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav style={navStyle}>
      <div style={leftStyle}>
        <span style={brandStyle}>Event Manager</span>

        <Link to="/dashboard" style={linkStyle}>
          Dashboard
        </Link>

        {user?.role === "admin" && (
          <Link to="/my-events" style={linkStyle}>
            My Events
          </Link>
        )}

        {user?.role === "user" && (
          <Link to="/my-registrations" style={linkStyle}>
            My Registrations
          </Link>
        )}
      </div>

      <div style={rightStyle}>
        {user && (
          <span style={userStyle}>
            {user.name} ({user.role})
          </span>
        )}
        <button onClick={logout} style={logoutBtn}>
          Logout
        </button>
      </div>
    </nav>
  );
}

/* ---------- styles ---------- */

const navStyle = {
  background: "#1e3a8a",
  padding: "12px 24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "white"
};

const leftStyle = {
  display: "flex",
  alignItems: "center",
  gap: "20px"
};

const rightStyle = {
  display: "flex",
  alignItems: "center",
  gap: "15px"
};

const brandStyle = {
  fontWeight: "bold",
  fontSize: "18px"
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "15px"
};

const userStyle = {
  fontSize: "14px",
  opacity: 0.9
};

const logoutBtn = {
  background: "#ef4444",
  border: "none",
  color: "white",
  padding: "6px 12px",
  borderRadius: "6px",
  cursor: "pointer"
};
