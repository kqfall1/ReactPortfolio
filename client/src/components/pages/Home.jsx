import Footer from '../sections/Footer.jsx';
import Introduction from '../sections/Introduction.jsx';
import Skills from '../sections/Skills.jsx';
import WorkExperience from '../sections/WorkExperience.jsx'; 

export default function Home() {
    return (
        <>
            <div className="home">
                <h1 className="h1Margins">Aspiring Software Engineer</h1>
                <Introduction/>
                <Skills/>
                <WorkExperience/>
            </div>
            <Footer/>
        </>
    )
}