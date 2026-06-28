import { FaTasks } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <h1 className="navbar-title">
            <FaTasks className="navbar-icon" />
            Tasks-Tracker
          </h1>

          <p className="navbar-subtitle">Organize your day efficiently</p>
        </div>
      </div>
    </nav>
  );
}
