function Reset({ Reset, onClick }) {
    return (
        <div>
            <button type="button" className="reset" onClick={onClick}>
                {Reset}
            </button>
        </div>
    );
}
export default Reset;