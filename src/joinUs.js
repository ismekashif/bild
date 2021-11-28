// Requires
import { Link } from 'react-router-dom';

// Components
import Title from './components/title';
import AccType from './components/accType';

const JoinUs = () => {
    return (
    <main>
      <p>Already have an account? <a href="./">Sign In</a></p>
      <Title 
        title="Join Us!" 
        para="To begin this journey, tell us what type of account you'd be opening." 
      />
      <AccType link="./personalInfo" />
      <Link to="./personalInfo">
        <div></div>
        <div>
          <p>Individual</p>
          <p>Personal account to manage all you activities.</p>
        </div>
      </Link>
      <a href="./">
      <div></div>
        <div>
          <p>Business</p>
          <p>Own or belong to a company, this is for you.</p>
        </div>
      </a>
    </main>
    );
}

export default JoinUs;