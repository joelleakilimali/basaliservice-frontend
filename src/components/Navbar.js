import { useState } from "react";
//import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    ///
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        {/* <img
          src="./assets/logo.jpg"
          alt="My Website Logo"
          className="logoimg"z
        /> */}
        <h2>Basali Service</h2>
      </div>
      <ul className="navbar__links">
        <li className="navbar__link">
          <Link
            to="/"
            className="navbar__link"
            style={{ textDecoration: "none" }}
          >
            Home
          </Link>
        </li>
        <li className="navbar__link">
          <Link
            to="/album"
            className="navbar__link"
            style={{ textDecoration: "none" }}
          >
            Album
          </Link>
        </li>
        <li className="navbar__link">
          <Link to="/tarifs" style={{ textDecoration: "none" }}>
            Tarifs
          </Link>
        </li>
        <li className="navbar__link">
          <Link to="/apropos" style={{ textDecoration: "none" }}>
            About Us
          </Link>
        </li>
        <li className="navbar__dropdown">
          <button className="navbar__dropdown-toggle" onClick={toggleDropdown}>
            Services
            <i className="fas fa-caret-down"></i>
          </button>
          <ul className={`navbar__dropdown-menu ${dropdownOpen ? "open" : ""}`}>
            <li className="navbar__dropdown-menu-item">
              <a href="/protocolat">Protocol</a>
            </li>
            <li className="navbar__dropdown-menu-item">
              <a href="/securite">Securite</a>
            </li>
            <li className="navbar__dropdown-menu-item">
              <a href="/maitredeceremonie">Maitre de ceremonie</a>
            </li>
            <li className="navbar__dropdown-menu-item">
              <a href="/decoration">Decoration</a>
            </li>
            <li className="navbar__dropdown-menu-item">
              <a href="/fille'honneur">Fille d'honneur</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
