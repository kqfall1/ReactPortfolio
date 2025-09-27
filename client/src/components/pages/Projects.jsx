import '../styles/Projects.css'; 
import BlackjackEngine from '../sections/BlackjackEngine.jsx';
import Footer from '../sections/Footer.jsx'; 
import HealthHome from '../sections/HealthHome.jsx'; 
import PetFramework from '../sections/PetFramework.jsx'; 

export default function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <BlackjackEngine />
            <PetFramework />
            <HealthHome />
            <Footer />
        </div>
    )
}