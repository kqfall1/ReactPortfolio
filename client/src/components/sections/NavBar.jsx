import '../../styles/NavBar.css';

import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png'; 
import { Outlet } from 'react-router-dom';

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
                    <a href="https://github.com/kqfall1" target="_blank">GitHub</a>
                    <Link to="/projects">Projects</Link> 
                    <a href="https://www.linkedin.com/in/quinn-keenan-616a4a383/" target="_blank">LinkedIn</a>
                </nav>
            </div>
            <hr />
            <Outlet />
        </>
    );
}