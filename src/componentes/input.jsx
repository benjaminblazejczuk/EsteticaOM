function Input(props) {
    return (
        <>
         <div>
            <label htmlFor={props.name}>{props.text}</label>
            <input type={props.type} id={props.name} name={props.name} value={props.value} onChange={props.onChange} required />
         </div>
        </>
    )
}
export default Input;