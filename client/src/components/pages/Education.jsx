import College from '../sections/College';
import CreateEducationForm from '../sections/CreateEducationForm';
import Footer from '../sections/Footer'; 
import HighSchool from '../sections/HighSchool';
import '../../styles/Education.css'; 

export default function Education() {
    return ( 
        <>
            <div className="education">
                <h1 className="h1Margins">Education</h1>
                <College className="horizontalSectionSidebar"/>
                <HighSchool className="horizontalSectionSidebar"/>
                <CreateEducationForm />
            </div>
            <Footer/>
        </>
    )
}