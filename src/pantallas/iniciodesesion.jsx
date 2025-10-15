import { useNavigate } from "react-router-dom";
import Input from "../componentes/input"
import Reset from "../componentes/reset"
import Submit from "../componentes/submit"
import { useState } from "react";
import { Link } from "react-router-dom";
import "../formularios.css"

export default function Sesion(){
    // Definimos los estados para almacenar lo que escribe el usuario
    const [nombre, setNombre] = useState("");
    const [contrasena, setContrasena] = useState("");

    const navigate = useNavigate();

    const HandleSubmit = (e) => { //hace que la pagina vaya verificando los datos y que estos se guarder , se activa con el enviar
        e.preventDefault();
        console.log("Datos enviados", { nombre, contrasena });
        navigate("/");  navigate("/", { state: { nombre } });  // <-- PASO EL NOMBRE COMO ESTADO
    }

      //  Esta función resetea los campos que marque con los set 
    const handleReset = () => { 
        setNombre("");
        setContrasena("");
    };


    return (
            <>
            <div className="form-box">
                <form method="post" onSubmit={HandleSubmit}>
                    <Input name="nombre" text="Nombre:" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/> 
                    <Input name="Contraseña" text="Contraseña:" type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)}/>
                    <div className="button-group">
                    <Reset Reset="Borrar" onClick={handleReset} />
                    <Submit enviar="enviar" />
                    </div>
                    <p className="link">
                    ¿No tenes una cuenta? <Link to="/registro">Registrarme</Link>
                    </p>
                    <p className="link">
                    entrar como<Link to="/"> Invitado</Link>
                    </p>
                </form>
            </div>    
            </> 
    );
}