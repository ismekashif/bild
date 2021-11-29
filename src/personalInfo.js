// Components
import Title from './components/title';
import Steps from './components/steps';
import Input from './components/input';

const PersonalInfo = () => {
    return (
        <main>
            <Steps 
                linkBack="../"
                stepCount="1"
                step="Personal Info."
            />
            <section>
                <Title 
                    title="Register Individual Account!"
                    para="For the purpose of industry regulation, your details are required."
                />
                <form action="../residencyInfo">
                    <Input 
                        input="Your Full Name*"
                        inputType="text"
                        placeholder="Enter full name"
                        required="required"
                    />
                    <Input 
                        input="Email address*"
                        inputType="email"
                        placeholder="Enter email address"
                        required="required"
                    />
                    <Input 
                        input="Create password*"
                        inputType="password"
                        placeholder="Enter password"
                        required="required"
                    />
                    <label>
                        <input type="checkbox" required/>
                        I agree to terms &amp; conditions
                    </label><br />
                    <input type="submit" />
                </form>
                <p>Or</p>
                <button>Register with Google</button>
            </section>
        </main>
    );
}

export default PersonalInfo;