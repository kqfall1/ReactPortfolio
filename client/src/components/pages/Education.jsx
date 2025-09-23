import '../styles/Education.css'
import College from '../sections/College';
import HighSchool from '../sections/HighSchool';
import Footer from '../sections/Footer'; 

export default function Education() {
    return ( 
        <>
            <div className="education">
                <h1>Education</h1>
                <College />
                <HighSchool />
            </div>
            <Footer />
        </>
    )
}