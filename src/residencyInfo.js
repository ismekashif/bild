// Components
import Title from './components/title';
import Steps from './components/steps';
import Input from './components/input';
import SelectCountry from './components/countries';

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
                <p>Your Info is safely secured</p>
            </section>
        </main>
    );
}

export default ResidencyInfo;