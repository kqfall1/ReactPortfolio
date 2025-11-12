import { create } from '../../../lib/api_crud.js'; 
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; 
import '../../styles/Form.css'; 

export default function ContactForm() {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const navigate = useNavigate();

    const submission = async (e) => {
        e.preventDefault(); 

        if (!validatePassword(formData.password)) {
            window.alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
            return;
        }
        
        try {
            const user = await create('api/users', null, formData);

            if (!user || user.error) {
                window.alert('Your sign up was unsuccessful.');
            }
            else {
                setFormData(INITIAL_STATE);
                window.alert('You have signed up successfully! Welcome aboard!');
                navigate('/')
            }
        }
        catch (err) {
            console.log(err)
            window.alert('An unexpected error occurred. Please try again later.');
        }
    }

    return (
        <form className="signUpForm" onSubmit={submission}>
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
            <label htmlFor="emailInput">Email: </label>
            <input
                id="emailInput"
                type="email"
                placeholder="something@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email : e.target.value})}
                match={/^\S+@\S+\.\S+$/}
                required
            />
            <label htmlFor="usernameInput">Username: </label>
            <input
                id="usernameInput"
                type="text"
                placeholder="johndoe123"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username : e.target.value})}
                required
            /><br />
            <label htmlFor="passwordInput">Password: </label>
            <input
                id="passwordInput"
                type="password"
                placeholder="********"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password : e.target.value})}
                required
            /><br />
            <button className="submit">Submit</button>
        </form> 
    )
}

const INITIAL_STATE = {
    email: '',    
    firstname: '',
    lastname: '',
    password: '',
    username: ''
}

const validatePassword = (password) => {
    const MIN_LENGTH = 8;
    const HAS_UPPERCASE = /[A-Z]/.test(password);
    const HAS_LOWERCASE = /[a-z]/.test(password);
    const HAS_NUMBER = /[0-9]/.test(password);
    const HAS_SPECIAL_CHAR = /[!@#$%^&*(),.?":{}|<>]/.test(password);  

    return password.length >= MIN_LENGTH 
        && HAS_UPPERCASE 
        && HAS_LOWERCASE 
        && HAS_NUMBER 
        && HAS_SPECIAL_CHAR;
} 