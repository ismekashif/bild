// Requires
import { Routes, Route } from 'react-router-dom';

// Routes
import JoinUs from '../pages/joinUs';
import PersonalInfo from '../pages/personalInfo/personalInfo';
import ResidencyInfo from '../pages/residencyInfo';
import BankVerification from '../pages/bankVerification';

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