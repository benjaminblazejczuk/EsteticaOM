function Textarea(props){
    return(
        <>
        <div className="vertical-flex">
        <label htmlFor={props.name}>{props.text}</label>
        <textarea id={props.id} name={props.name} rows="10" cols="30" placeholder={props.resumen}></textarea>
        </div>
        </>
    )
}
export default Textarea;