import { useLocation, useNavigate } from "react-router-dom";
import Reset from "../componentes/reset";
import CrearCuenta from "../componentes/button";
import Navbar from "../componentes/Navbar";
import Agenda from "./agenda";
import tratamientos from "./tratamientos";
import infopersonal from "./infopersonal";
import "../inicio.css"

export default function Inicio() {
  const navigate = useNavigate();
  const location = useLocation();
  const nombre = location.state?.nombre || "Invitado";

  const handleCambiarCuenta = () => {
    navigate("/iniciodesesion");
  };

  return (
    <div>
      <Navbar />
      <div id="TituloContainer">
       <h1 id="Titulo">Beauty <br />Om</h1>
      </div>
      <img src="" alt="" />
    </div>
  );
}
