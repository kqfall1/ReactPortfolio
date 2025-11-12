import auth from '../../../lib/auth_helpers.js'
import { signIn } from '../../../lib/api_auth.js'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'; 
import '../../styles/Form.css'

const INITIAL_STATE = {
    email: '', 
    password: ''
}

export default function SignInForm() {
    const [formData, setFormData] = useState(INITIAL_STATE)
    const navigate = useNavigate()

    const submission = async (e) => {
        e.preventDefault(); 
        await signIn(formData)
            
        if (auth.isAuthenticated()) {
            setFormData(INITIAL_STATE)
            window.alert('Successfully signed in.')
            navigate('/')
        }
        else {
            window.alert('You have entered invalid credentials.')
        }
    }

    return (
        <form className="signInForm" onSubmit={submission}>
            <label htmlFor="emailInput">Email:</label>
            <input 
                id="emailInput"
                type="text"
                placeholder="something@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ 
                    ...formData, 
                    email: e.target.value
                })}
                required
            />
            <label htmlFor="password">Password:</label>
            <input
                id="password"
                type="password"
                placeholder="********"
                value={formData.password}
                onChange={(e) => setFormData({
                    ...formData, 
                    password: e.target.value
                })}
                required
            /><br />
            <button id="submit">Submit</button>
        </form>
    )
}