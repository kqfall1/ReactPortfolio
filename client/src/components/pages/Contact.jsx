import ContactForm from '../sections/forms/ContactForm.jsx'; 
import Footer from '../sections/Footer.jsx'; 

export default function Contact() {
    return (
        <>
            <div className="contact">
                <h1 className="h1Margins">Contact Me</h1>
                <ContactForm/>
            </div>
            <Footer/>
        </>
    )
}