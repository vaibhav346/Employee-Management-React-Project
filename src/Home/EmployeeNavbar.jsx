import React from "react";
import { Link } from "react-router-dom";
import "./AdminNavbar.css";
import { useState } from "react";

export default function EmployeeNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Header with Logo */}
      <div className="header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK0Hc78tkH6KUQLDTPH2DubaE1XZr9n6offA&s" alt="Employee Logo" />
        <h1
          style={{
            textAlign: "center",
            color: "#2c3e50",
            fontFamily: "Arial, sans-serif",
            fontWeight: "900", // very bold
            fontSize: "60px",
          }}
        >
          {" "}
          Digital Employee Management System .Pvt .Limited
        </h1>
      </div>

      <nav className="navbar">
        <button className="toggle-btn" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li>
            <Link to="/employeedashbord">Home</Link>
          </li>
          <li>
            <Link to="/getemployee">Employees</Link>
          </li>

          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </nav>
      {/* Marquee */}
      <div className="marquee">
        <p>
          📚 Welcome to the Employee Management System! Browse Employee, manage
          members, and more. 📖
        </p>
      </div>

      {/* Copyright Section */}
    </div>
  );
}
