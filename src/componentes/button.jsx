import { useNavigate } from "react-router-dom";

function CrearCuenta({ texto }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/registro"); // Redirecciona a /registro
  };

  return (
    <div>
      <button type="button"  className="boton-principal" onClick={handleClick}>
        {texto}
      </button>
    </div>
  );
}

export default CrearCuenta;
