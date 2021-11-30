// Components
import Steps from '../components/steps/steps';
import Title from '../components/title';
import Input from '../components/input/input';
import SelectCountry from '../components/countries';
import Secured from '../components/secured';

const ResidencyInfo = () => {
    return (
        <main>
            <Steps 
                linkBack="../personalInfo"
                stepCount="2"
                step="Residency Info."
            />
            <section>
                <Title 
                    title="Complete Your Profile!"
                    para="For the purpose of industry regulation, your details are required."
                />
                <form action="../bankVerification">
                    <Input 
                        input="Phone number"
                        type="tel"
                        placeholder="Please enter phone number"
                    />
                    <Input 
                        input="Your address"
                        type="text"
                        placeholder="Please enter address"
                    />
                    <SelectCountry />
                    <input type="submit" value="Save & Continue" />
                </form>
                <Secured />
            </section>
        </main>
    );
}

export default ResidencyInfo;