import CentennialCollegeProgress from "../../assets/CentennialCollegeProgress.jpg"; 

export default function College () {
    return ( 
        <div className="college">
            <h2 className="sectionH2">Software Engineering Technology (Co-Op) Advanced Diploma</h2>
            <p className="sectionP">Centennial College (Progress Campus), Scarborough, ON</p>
            <p className="sectionP">January 2025 - Present</p>
            <p className="sectionP">GPA: 4.1/4.5</p>    
            <div className="horizontalSectionSidebar"> 
                <img src={CentennialCollegeProgress} alt="Centennial College's Progress Campus"/> 
                <p className="horizontalSectionSidebarRightElement">
                    Going to college was one of the best decisions I ever made! Here, I bolstered my skills
                    in object-oriented programming and web development. I also learned lots about the theory
                    behind software engineering (the software development life cycle), English, mathematics, 
                    and even psychology! I'm so grateful to be fortunate enough to pursue my passion for 
                    software. However, I want to make sure I do it the right way and don't cut corners!
                    <br/><br/><div id="collegePhotoSrcPreamble">Campus Services. Centennial 
                    College.</div> <a href="https://www.centennialcollege.ca/student-life/campus-services/">
                    https://www.centennialcollege.ca/student-life/campus-services/</a>
                </p>
            </div>    
        </div>
    ); 
} 