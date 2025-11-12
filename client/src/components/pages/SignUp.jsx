import Footer from '../sections/Footer.jsx';
import SignUpForm from '../sections/forms/SignUpForm.jsx';

export default function SignUp() {
    return (
        <>
            <div className="signUp">
                <h1 className="h1Margins">Sign Up</h1>
                <SignUpForm/>
            </div>
            <Footer/>
        </>
    )
}