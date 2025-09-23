import '../styles/College.css';
import CentennialCollegeProgress from "../../assets/CentennialCollegeProgress.jpg"; 

export default function College () {
    return ( 
        <div className="college">
            <div className="headerTags">
                <h2>Software Engineering Technology (Co-Op) Advanced Diploma</h2>
                <p>Centennial College (Progress Campus), Scarborough, ON</p>
                <p>January 2025 - Present</p>
                <p>GPA: 4.1/4.5</p>
            </div>
            <div className="collegeContent"> 
                <img src={CentennialCollegeProgress} alt="Centennial College's Progress Campus" /> 
                <p className="collegeDescription">
                    Going to college was one of the best decisions I ever made! Here, I bolstered my skills
                    in object-oriented programming and web development. I also learned lots about the theory
                    behind software engineering (the software development life cycle), English, mathematics, 
                    and even psychology! I'm so grateful to be fortunate enough to pursue my passion for 
                    technology.<br /><br /><div id="collegePhotoSrcPreamble">Campus Services. Centennial 
                    College.</div> <a href="https://www.centennialcollege.ca/student-life/campus-services/">
                    https://www.centennialcollege.ca/student-life/campus-services/</a>
                </p>
            </div>    
        </div>
    ); 
} 