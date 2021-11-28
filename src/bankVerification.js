// Requires
import { Link } from 'react-router-dom';

// Components
import Title from './components/title';

const BankVerification = () => {
    return (
        <main>
            <Link to="../residencyInfo">Back</Link>
            <div>
                <p>Step 03/03</p>
                <p>Bank Verification</p>
            </div>
            <section>
                <Title 
                    title="Complete Your Profile!"
                    para="For the purpose of industry regulation, your details are required."
                />
                <form>
                    <label>
                        Bank verification number (BVN)<br />
                        <input type="number" placeholder="Please enter bank verification number" />
                    </label><br />
                    <input type="submit" value="Save & Continue" />
                </form>
                <p>Your Info is safely secured</p>
            </section>
        </main>
    );
}

export default BankVerification;