import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png'; 
import { Outlet } from 'react-router-dom';
import { signOut } from '../../../lib/api_auth.js'
import '../../styles/NavBar.css';

export default function NavBar() {
    return (
        <>
            <div className="navbar">
                <Link to="/"><img src={Logo} alt=""/></Link>
                <div className="portfolioInfo">     
                   <h4>437-430-2758</h4>
                   <h4>kqfall1@gmail.com</h4>
                </div>
                <nav className="navLinks">
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/education">Education</Link> 
                    <Link to="/projects">Projects</Link> 
                    <Link to="/signin">Sign In</Link>
                    <Link to="/signup">Sign Up</Link>
                    <button onClick={async () => {
                        signOut()
                        window.alert("Successfully signed out.")
                    }}>Sign Out</button>
                </nav>
            </div>
            <hr />
            <Outlet />
        </>
    );
}