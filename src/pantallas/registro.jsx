import { useNavigate } from "react-router-dom";
import Input from "../componentes/input"
import Reset from "../componentes/reset"
import Submit from "../componentes/submit"
import { useState } from "react";
import { Link } from "react-router-dom";
import "../formularios.css"


export default function Registro(){
    const [nombre, setNombre] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [email, setEmail] = useState("");
    const [nombredeusuario, setnombre] = useState("");
    const [contrasenaconfirmada, setcontrasena] = useState("");

    // Función que se ejecuta al enviar el formulario
    const navigate = useNavigate();
     const HandleSubmit = (e) => { //se usa como parametro la e, da acceso a información útil como qué se tocó, qué valor se escribió, y permite prevenir acciones por defecto.
        e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar)
        console.log("Datos enviados", { nombre, contrasena,email,nombredeusuario,contrasenaconfirmada });
        navigate("/");    navigate("/iniciodesesion"); // <-- me manda a la parte de inicidesesion
     }  

        //  Esta función resetea los campos
    const handleReset = () => {
        setNombre("");
        setContrasena("");
        setEmail("");
        setcontrasena("");
        setnombre("");
    };


    return (
          <>
            <div className="form-box">
                <form method="post" onSubmit={HandleSubmit}>
                    <Input name="nombre" text="Nombre Completo:" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/> 
                    <Input name="Email" text="Email:" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <Input name="nombre" text="Nombre De usuario:" type="text" value={nombredeusuario} onChange={(e) => setnombre(e.target.value)}/>    
                    <Input name="Contraseña" text="Contraseña:" type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)}/>   
                    <Input name="Contraseña" text="Confirmar contraseña:" type="password" value={contrasenaconfirmada} onChange={(e) => setcontrasena(e.target.value)}/>                            
                     <div className="button-group">
                    <Reset Reset="Borrar" onClick={handleReset} />
                    <Submit enviar="enviar" />
                    </div>
                    <p className="link">
                    ¿Ya tenés una cuenta? <Link to="/iniciodesesion">Iniciar sesión</Link>
                    </p>
                      <p className="link">
                    entrar como<Link to="/"> Invitado</Link>
                    </p>
                </form>
            </div>    
            </> 
    );
}