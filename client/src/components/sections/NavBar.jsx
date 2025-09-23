import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import '../styles/NavBar.css';

export default function NavBar() {
    return (
        <>
            <div className="navbar">
               <h1 className="title"><Link to="/">Quinn Keenan</Link></h1>
                <div className="portfolioInfo">     
                   <h4>437-430-2758</h4>
                   <h4>kqfall1@gmail.com</h4>
                </div>
                <nav className="navLinks">
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/education">Education</Link> 
                    <Link to="https://github.com/kqfall1">GitHub</Link>
                    <Link to="/projects">Projects</Link> 
                    <Link to="https://www.linkedin.com/in/quinn-keenan-616a4a383/">LinkedIn</Link>
                </nav>
            </div>
            <hr />
            <Outlet />
        </>
    );
}