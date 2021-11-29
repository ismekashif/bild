const Input = props => {
    return (
        <>
            <label>
                {props.input}<br />
                <input type={props.inputType} placeholder={props.placeholder} required={props.required} />
            </label><br />
        </>
    );
}

export default Input;