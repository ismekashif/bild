// Components
import Title from '../components/title';
import AccType from '../components/accType';

const JoinUs = () => {
    return (
    <main>
      <p id="sign-in">Already have an account? <a href="./">Sign In</a></p>
      <div>
        <Title 
          title="Join Us!" 
          para="To begin this journey, tell us what type of account you'd be opening." 
        />
        <AccType 
          link="./personalInfo" 
          class="fas fa-user"
          type="Individual" 
          typeInfo="Personal account to manage all you activities." 
        />
        <AccType 
          link="./" 
          class="fas fa-briefcase"
          type="Business" 
          typeInfo="Own or belong to a company, this is for you." 
        />
      </div>
    </main>
    );
}

export default JoinUs;