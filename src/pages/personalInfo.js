// Components
import Steps from '../components/steps';
import Title from '../components/title';
import Input from '../components/input';

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
                    <input type="checkbox" required/>
                    <label id="checkbox-label">I agree to terms &amp; conditions</label><br />
                    <input type="submit" value="Register Account" />
                </form>
                <p id="or">Or</p>
                <div id="gSignInWrapper">
                    <div id="customBtn" class="customGPlusSignIn">
                    <span class="icon"></span>
                    <span class="buttonText">Register with Google</span>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default PersonalInfo;