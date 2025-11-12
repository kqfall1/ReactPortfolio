import auth from '../../../lib/auth_helpers.js';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png'; 
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { signOut } from '../../../lib/api_auth.js'
import { useEffect, useState } from 'react';
import '../../styles/NavBar.css';

export default function NavBar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [session, setSession] = useState(auth.isAuthenticated());

    /** Updates the state of the component each time the route changes. */
    useEffect(() => {setSession(auth.isAuthenticated())}, [location])

    return (session ? 
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
                    <a href="https:/www.github.com/kqfall1" target="_blank">GitHub</a>
                    <Link to="/projects">Projects</Link> 
                    <a onClick={async () => {
                        await signOut();
                        setSession(auth.isAuthenticated());
                        navigate('/');
                    }}>Sign Out</a>
                </nav>
            </div>
            <hr />
            <Outlet />
        </> : 
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
                </nav>
            </div>
            <hr />
            <Outlet />
        </>
    );
}