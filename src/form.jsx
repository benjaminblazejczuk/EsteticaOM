import Input from "./componentes/input";
import Select from "./componentes/select";
import Textarea from "./componentes/textarea";
import Reset from "./componentes/reset";
import Submit from "./componentes/submit";



function Formulario() {

    const dias = ["Lunes","Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    const opciones = dias.map((value, i) => <option value={value}>{value}</option>);
    const numero = [1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    const op_num = numero.map((value, i) => <option value={value}>{value}</option>);

    return (
        <form action="" method="">
            <Input name="nombre" text="Nombre:" type="text" />
            <Select opciones={opciones} name="semana" accion=":" id="semana"  />
            <Select opciones={op_num} name="numero" accion=":" id="numero" /> 
            <Textarea text="conta que hiciste" id="descripcion" name="descripcion" resumen=""/> 
            <div className="horizontal-flex">
            <Reset Reset="Reset"/> 
            <Submit enviar="enviar"/> 
            </div>
        </form>
        )
} export default Formulario;