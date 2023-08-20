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
          className="logoimg"
        /> */}
        <h2>Basali Service</h2>
      </div>
      <ul
        className="navbar__links"
        style={{ fontFamily: "text-font-open-sans", fontSize: "20px" }}
      >
        <li className="navbar__link">
          <Link
            to="/"
            className="navbar__link"
            style={{ textDecoration: "none" }}
          >
            Accueil
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
            A propos
          </Link>
        </li>
        <li>
          <div class="dropdown mx-20">
            <button>Services</button>
            <div class="dropdown-content">
              <a href="/protocolat">Protocol</a>
              <a href="/securite">Securite</a>
              <a href="/maitredeceremonie">Maitre de ceremonie</a>
              <a href="/decoration">Decoration</a>
              <a href="/fille'honneur">Fille d'honneur</a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
