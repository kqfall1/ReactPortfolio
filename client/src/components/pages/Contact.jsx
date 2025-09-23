import '../styles/Contact.css'; 
import ContactForm from '../sections/ContactForm.jsx'; 
import Footer from '../sections/Footer.jsx'; 

export default function Contact() {
    return (
        <>
            <div className="contact">
                <h1>Contact Me</h1>
                <ContactForm />
            </div>
            <Footer />
        </>
    )
}