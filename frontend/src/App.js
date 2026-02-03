import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./components/Dashboard";
import MyRegistrations from "./pages/MyRegistrations";
import MyEvents from "./pages/MyEvents";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-events" element={<MyEvents />} />

        <Route path="/my-registrations" element={<MyRegistrations />} />
      </Routes>
    </BrowserRouter>
  );
}
