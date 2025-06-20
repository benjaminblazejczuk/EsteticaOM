import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/iniciodesesion">Inicio de sesión</Link>
      <Link to="/registro">Registro</Link>
    </nav>
  );
}

