import College from '../sections/College';
import EducationForm from '../forms/EducationForm';
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
                <EducationForm />
            </div>
            <Footer/>
        </>
    )
}