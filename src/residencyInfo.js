// Requires
import { Link } from 'react-router-dom';

// Components
import Title from './components/title';

const ResidencyInfo = () => {
    return (
        <main>
            <Link to="../personalInfo">Back</Link>
            <div>
                <p>Step 02/03</p>
                <p>Residency Info.</p>
            </div>
            <section>
                <Title 
                    title="Complete Your Profile!"
                    para="For the purpose of industry regulation, your details are required."
                />
                <form>
                    <label>
                        Phone number<br />
                        <input type="tel" placeholder="Please enter phone number" />
                    </label><br />
                    <label>
                        Your address<br />
                        <input type="text" placeholder="Please enter address" />
                    </label><br />
                    <label>Country of residence<br />
                        <select>
                            <option selected disabled>Please select</option>
                            <option>Student</option>
                            <option>Full Time Job</option>
                            <option>Full Time Learner</option>
                            <option>Prefer not to say</option>
                            <option>Other</option>
                        </select>
                    </label><br />
                    <Link to="../bankVerification"><input type="submit" value="Save & Continue" /></Link>
                </form>
                <p>Your Info is safely secured</p>
            </section>
        </main>
    );
}

export default ResidencyInfo;