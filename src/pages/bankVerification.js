// Components
import Title from '../components/title';
import Steps from '../components/steps/steps';
import Input from '../components/input/input';
import Secured from '../components/secured';

const BankVerification = () => {
    return (
        <main>
            <Steps 
                linkBack="../residencyInfo"
                stepCount="3"
                step="Bank Verification"
            />
            <section>
                <Title 
                    title="Complete Your Profile!"
                    para="For the purpose of industry regulation, your details are required."
                />
                <form>
                    <Input 
                        input="Bank verification number (BVN)"
                        inputType="number"
                        placeholder="Please enter BVN"
                    />
                    <input type="submit" value="Save & Continue" />
                </form>
                <Secured />
            </section>
        </main>
    );
}

export default BankVerification;