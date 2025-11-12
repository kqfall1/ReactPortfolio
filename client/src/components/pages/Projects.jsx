import BlackjackEngine from '../sections/BlackjackEngine.jsx';
import ProjectForm from '../sections/forms/ProjectForm.jsx';
import Footer from '../sections/Footer.jsx'; 
import HealthHome from '../sections/HealthHome.jsx'; 
import PetFramework from '../sections/PetFramework.jsx'; 

export default function Projects() {
    return (
        <>
            <div className="projects">
                <h1 className="h1Margins">Projects</h1>
                <BlackjackEngine className="horizontalSectionSidebar"/>
                <PetFramework className="horizontalSectionSidebar"/>
                <HealthHome className="horizontalSectionSidebar"/>
                <ProjectForm />
            </div>
            <Footer/>
        </>
    )
}