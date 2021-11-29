const Input = props => {
    return (
        <>
            <label>
                {props.input}<br />
                <input 
                    id="input-box"
                    type={props.inputType} 
                    placeholder={props.placeholder} 
                    required={props.required} 
                />
            </label><br />
        </>
    );
}

export default Input;