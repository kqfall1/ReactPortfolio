import { create } from '../../../lib/api_crud.js'; 
import '../../styles/Form.css'; 
import { useState } from 'react'; 

export default function ContactForm() { 
    const [formData, setFormData] = useState({
        email: '',    
        firstname: '', 
        lastname: '',
        message: '', 
        phone: '',
    });
    
    const submission = async (e) => { 
        e.preventDefault(); 
        
        try {
            await create('api/contacts', formData);

            setFormData({
                email : '', 
                firstname : '',
                lastname : '',
                message : '',
                phone : '',
            });

            window.alert('Your message has been sent successfully! Thank you for reaching out.');
        }
        catch (err) {
            window.alert(err)
        }
    }
    
    return ( 
        <form className="contactForm" onSubmit={submission}> 
            <label htmlFor="firstNameInput">First name: </label>
            <input 
                id="firstNameInput" 
                type="text" 
                placeholder="John" 
                value={formData.firstname} 
                onChange={(e) => setFormData({ ...formData, firstname : e.target.value})} 
                required 
                autoFocus
            />
            <label htmlFor="lastNameInput">Last name: </label>  
            <input 
                id="lastNameInput" 
                type="text" 
                placeholder="Doe" 
                value={formData.lastname} 
                onChange={(e) => setFormData({ ...formData, lastname : e.target.value})}
                required
            /><br />
            <label htmlFor="phoneNumberInput">Phone number: </label>
            <input 
                id="phoneNumberInput" 
                type="phone" 
                placeholder="999-999-9999" 
                value={formData.phone} 
                onChange={(e) => setFormData({ ...formData, phone : e.target.value})}
                required
            />
            <label htmlFor="emailInput">Email: </label>
            <input 
                id="emailInput" 
                type="email" 
                placeholder="johndoe@gmail.com" 
                value={formData.email} 
                onChange={(e) => setFormData({ ...formData, email : e.target.value})}
                required
            /><br />
            <textarea
                placeholder="Type away! Please be nice!" 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message : e.target.value})}
            ></textarea> 
            <button id="submit">Submit</button>
        </form>     
    )
}