// Requires
import { Link } from 'react-router-dom';
import './accType.css';

const AccType = props => {
    return (
        <Link to={props.link} style={{ textDecoration: 'none' }}>
            <div id="acc-type">
                <div id="acc-type-icon"><i className={props.class}></i></div>
                <div>
                    <p id="acc-type-title">{props.type}</p>
                    <p id="acc-type-info">{props.typeInfo}</p>
                </div>
                <div id="acc-type-arrow"><i className="fas fa-arrow-right"></i></div>
            </div>
        </Link>
    );
}

export default AccType;