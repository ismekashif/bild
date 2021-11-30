// Requires
import './input.css';

const Input = props => {
    return (
        <>
            <label>
                {props.input}<br />
                <input 
                    className="input-box"
                    type={props.inputType} 
                    placeholder={props.placeholder} 
                    required={props.required} 
                />
            </label><br />
        </>
    );
}

export default Input;