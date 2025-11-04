import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.jpeg";
import "../navbar.css";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <nav>
      <div className="nav-container">
        {/* Logo */}
        <div id="logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        {/* Botón hamburguesa */}
        <div className={`hamburger ${menuAbierto ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <div className={`nav-links ${menuAbierto ? "show" : ""}`}>
          <Link to="/" onClick={cerrarMenu}>Inicio</Link>
          <Link to="/tratamientos" onClick={cerrarMenu}>Tratamientos</Link>
          <Link to="/agenda" onClick={cerrarMenu}>Agenda</Link>
          <Link to="/iniciodesesion" onClick={cerrarMenu}>Inicio de sesión</Link>
          <Link to="/registro" onClick={cerrarMenu}>Registro</Link>
          <Link to="/infopersonal" onClick={cerrarMenu}>Información Personal</Link>
        </div>
      </div>
    </nav>
  );
}
