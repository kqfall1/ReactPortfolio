import Footer from '../sections/Footer.jsx';
import SignInForm from '../sections/SignInForm.jsx';

export default function SignIn() {
    return (
        <>
            <div className="signIn">
                <h1 className="h1Margins">Sign In</h1> 
                <SignInForm />
            </div>
            <Footer />
        </>
    )
}