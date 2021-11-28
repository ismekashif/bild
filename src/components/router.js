// Requires
import { Routes, Route } from 'react-router-dom';

// Routes
import JoinUs from '../joinUs';
import PersonalInfo from '../personalInfo';
import ResidencyInfo from '../residencyInfo';
import BankVerification from '../bankVerification';

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<JoinUs />} />
            <Route exact path="/personalInfo" element={<PersonalInfo />} />
            <Route exact path="/residencyInfo" element={<ResidencyInfo />} />
            <Route exact path="/bankVerification" element={<BankVerification />} />
        </Routes>
    );
}

export default Router;