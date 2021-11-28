import { Link } from 'react-router-dom';

const AccType = props => {
    return (
        <Link to={props.link}>
            <div></div>
            <div>
            <p>{props.type}</p>
            <p>{props.typeInfo}</p>
            </div>
        </Link>
    );
}

export default AccType;