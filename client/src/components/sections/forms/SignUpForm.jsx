import { create } from '../../../../lib/api_crud.js'; 
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; 
import '../../../styles/Form.css'; 

export default function ContactForm() {
    const [formData, setFormData] = useState({
        email: '',    
        firstname: '',
        lastname: '',
        password: '',
        username: '',
    });

    const navigate = useNavigate();

    const submission = async (e) => {
        e.preventDefault(); 

        try {
            await create('api/users', null, formData);

            setFormData({
                email : '', 
                firstname : '',
                lastname : '',
                password : '',
                username : '',
            });

            window.alert('You have signed up successfully! Welcome aboard!');
            navigate('/')
        }
        catch (err) {
            window.alert(err)
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
            <label htmlFor="emailInput">Username: </label>
            <input
                id="emailInput"
                type="email"
                placeholder="something@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email : e.target.value})}
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
            <button id="submit">Submit</button>
        </form> 
    )
}