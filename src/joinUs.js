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
      <AccType 
        link="./personalInfo" 
        type="Individual" 
        typeInfo="Personal account to manage all you activities." 
      />
      <AccType 
        link="./" 
        type="Business" 
        typeInfo="Own or belong to a company, this is for you." 
      />
    </main>
    );
}

export default JoinUs;