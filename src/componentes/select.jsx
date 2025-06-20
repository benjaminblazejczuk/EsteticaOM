function Select(props){
    return(
        <>
        <div>
        <label for={props.name}>Seleccionar {props.accion}</label>
            <select id={props.id} name={props.name} required>
                {props.opciones}
            </select>
        </div>
        </>
    )
}
export default Select;