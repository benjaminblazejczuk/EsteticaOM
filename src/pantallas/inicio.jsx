import { useLocation, useNavigate } from "react-router-dom";// Importa el hook useLocation para acceder al objeto location (info de la ruta actual)
import Reset from "../componentes/reset";
import CrearCuenta from "../componentes/button";
import Navbar from "../componentes/Navbar";

export default function Inicio(){
  const navigate = useNavigate(); 
  const location = useLocation();// Obtiene la ubicación actual, que puede contener información enviada desde otra ruta
  const nombre = location.state?.nombre || "Invitado";   // Busca en location.state la propiedad "nombre" que pudo haber sido pasada por navegación // Si no existe, usa "Invitado" como valor por defecto


  const handleCambiarCuenta = () => {
    navigate("/iniciodesesion"); // Navega a la ruta del inicio de sesión
  };

   return (
    <div>
      <Navbar/>

        <div className="form-box">
          <h2>Hola, {nombre} Bienvenido a mi pagina
            espero que te guste, tenes 2 opciones
            ¡¡¡cambiar de cuenta o crear una nueva!!!
          </h2>
        </div>
    </div>
  )
}