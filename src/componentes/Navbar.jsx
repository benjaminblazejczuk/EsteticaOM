import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/tratamientos">Tratamientos</Link>
      <Link to="/agenda">Agenda</Link>
      <Link to="/iniciodesesion">Inicio de sesión</Link>
      <Link to="/registro">Registro</Link>
      <Link to="/infopersonal">Informacion Personal</Link>
    </nav>
  );
}

