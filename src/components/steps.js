//Requires
import { Link } from 'react-router-dom';

const Steps = props => {
    return (
        <>
            <Link to={props.linkBack}>Back</Link>
            <div>
                <p>Step 0{props.stepCount}/03</p>
                <p>{props.step}</p>
            </div>
        </>
    );
}

export default Steps;