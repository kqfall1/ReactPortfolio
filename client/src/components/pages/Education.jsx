import '../../styles/Education.css'

import College from '../sections/College';
import Footer from '../sections/Footer'; 
import HighSchool from '../sections/HighSchool';

export default function Education() {
    return ( 
        <>
            <div className="education">
                <h1 className="h1Margins">Education</h1>
                <College className="horizontalSectionSidebar"/>
                <HighSchool className="horizontalSectionSidebar"/>
            </div>
            <Footer/>
        </>
    )
}