import { useNavigate } from "react-router-dom";
import Input from "../componentes/input"
import Reset from "../componentes/reset"
import Submit from "../componentes/submit"
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Registro(){
    const [nombre, setNombre] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [email, setEmail] = useState("");
    const [nombredeusuario, setnombre] = useState("");
    const [contrasenaconfirmada, setcontrasena] = useState("");

    const navigate = useNavigate();
     const HandleSubmit = (e) => { 
        e.preventDefault();
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
                </form>
            </div>    
            </> 
    );
}