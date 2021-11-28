// Requires
import { Link } from 'react-router-dom';

// Components
import Title from './components/title';

const PersonalInfo = () => {
    return (
        <main>
            <Link to="../">Back</Link>
            <div>
                <p>Step 01/03</p>
                <p>Personal Info.</p>
            </div>
            <section>
                <Title 
                    title="Register Individual Account!"
                    para="For the purpose of industry regulation, your details are required."
                />
                <form>
                    <label>
                        Your Full Name*<br />
                        <input type="text" placeholder="Enter full name" required/>
                    </label><br />
                    <label>
                        Email address*<br />
                        <input type="email" placeholder="Enter email address" required/>
                    </label><br />
                    <label>
                        Create password*<br />
                        <input type="password" placeholder="Enter password" required/>
                    </label><br />
                    <label>
                        <input type="checkbox" />
                        I agree to terms &amp; conditions
                    </label><br />
                    <Link to="../residencyInfo"><input type="submit" /></Link>
                </form>
                <p>Or</p>
                <button>Register with Google</button>
            </section>
        </main>
    );
}

export default PersonalInfo;