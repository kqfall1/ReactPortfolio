import '../../styles/ContactForm.css'; 

import { useNavigate } from 'react-router-dom'; 

export default function ContactForm() { 
    const navigate = useNavigate(); 
        
    const handleContactFormSubmission = (e) => { 
        e.preventDefault(); 
        navigate("/");
    }
    
    return ( 
        <form className="contactForm" onSubmit={handleContactFormSubmission}> 
            <label for="firstNameInput">First name: </label>
            <input id="firstNameInput" type="text" placeholder="John" required autofocus/>
            <label for="lastNameInput">Last name: </label>  
            <input id="lastNameInput" type="text" placeholder="Doe" required/><br />
            <label for="phoneNumberInput">Phone number: </label>
            <input id="phoneNumberInput" type="text" placeholder="999-999-9999" required/>
            <label for="emailInput">Email: </label>
            <input id="emailInput" type="text" placeholder="johndoe@gmail.com" required/><br />
            <textarea placeholder="Type away! Please be nice!"></textarea> 
            <button id="submit">Submit</button>
        </form>     
    )
}