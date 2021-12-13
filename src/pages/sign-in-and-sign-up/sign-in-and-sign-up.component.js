import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.componen';
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUp = () => {
    return (
        <div className="sign-in-and-sign-up"> 
            <SignUp />
            <SignIn />
            
        </div>
    );
}

export default SignInAndSignUp;
