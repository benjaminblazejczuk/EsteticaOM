import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../componentes/Navbar";
import "../inicio.css";
import img1 from "../img/img1.jpg"
import img2 from "../img/img2.jpg"
import img3 from "../img/img3.jpg"



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
      <main className="inicio-main">
        <div id="TituloContainer">
          <h1 id="Titulo">Beauty Om</h1>
          <img src={img1} alt="" />
          <h2>¿Porque es necesaria la belleza integral?</h2>
          <p>significa cuidar el cuerpo, la mente y las emociones al mismo tiempo. No se trata solo de la apariencia física, sino también de sentirse bien por dentro.</p>
           <img src={img2} alt="" />
             <h2>¿Es buena para la salud?</h2>
          <p>Sí, es buena para la salud, ya que mejora la confianza, reduce el estrés y fomenta hábitos saludables como buena alimentación y descanso.</p>
            <img src={img3} alt="" />
              <h2>¿Qué hábitos ayudan a mantener la belleza integral?</h2>
          <p>Para mantener la belleza integral se recomienda tener una alimentación equilibrada, hacer ejercicio regularmente, cuidar la piel, dormir bien y mantener una actitud positiva. Estos hábitos fortalecen tanto el cuerpo como la mente, mejorando la salud y la apariencia de forma natural.</p>
        </div>
      </main>
    </div>
  );
}
