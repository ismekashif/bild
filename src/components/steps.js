//Requires
import { Link } from 'react-router-dom';

const Steps = props => {
    return (
        <div id="steps">
            <div id="steps-back">
                <i className="fas fa-chevron-left"></i> <Link to={props.linkBack} style={{ textDecoration: 'none', color: '#8692A6' }}>Back</Link>
            </div>
            <div id="steps-count">
                <p>STEP 0{props.stepCount}/03</p>
                <p>{props.step}</p>
            </div>
        </div>
    );
}

export default Steps;