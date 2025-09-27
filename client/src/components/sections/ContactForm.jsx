import '../styles/ContactForm.css'; 
import { useNavigate } from 'react-router-dom'; 

export default function () { 
    const navigate = useNavigate(); 
        
    const handleContactFormSubmission = (e) => { 
        e.preventDefault(); 
        navigate("/");
    }
    
    return ( 
        <form id="contactForm" onSubmit={handleContactFormSubmission}> 
            <label for="firstNameInput">First name: </label>
            <input id="firstNameInput" type="text" placeholder="John" />
            <label for="lastNameInput">Last name: </label>  
            <input id="lastNameInput" type="text" placeholder="Doe" /><br />
            <label for="phoneNumberInput">Phone number: </label>
            <input id="phoneNumberInput" type="text" placeholder="999-999-9999"/>
            <label for="emailInput">Email: </label>
            <input id="emailInput" type="text" placeholder="johndoe@gmail.com"/><br />
            <textarea placeholder="Type away! Please be nice!"></textarea> 
            <button id="submit">Submit</button>
        </form>     
    )
}