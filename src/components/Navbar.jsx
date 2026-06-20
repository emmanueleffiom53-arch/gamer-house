import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Gamer House 🎮</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
    
  );
}

export default Navbar;