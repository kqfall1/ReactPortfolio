import '../../styles/HighSchool.css';

import RH_KingAcademy from '../../assets/RH_KingAcademy.jpg';

export default function HighSchool() {
    return ( 
        <div className="highSchool">
            <h2 className="sectionH2">High School Diploma</h2>
            <p className="sectionP">R.H. King Academy, Scarborough, ON</p>
            <p className="sectionP">September 2016 - June 2020</p>
            <p className="sectionP">Graduated with Honors</p>
            <div className="horizontalSectionSidebar">
                <div className="highSchoolDescription">
                    <p>
                        I am glad that I had the opportunity to attend R.H. King Academy as a secondary student. 
                        It is an academic-oriented school that emphasizes the importance of community service and
                        leadership. The mathematics, science, and computer technology courses available when I 
                        was enrolled there were difficult but very helpful in preparing me for college.<br/><br/>
                        
                        I most fondly remember some good times I had in some of the programming and computer 
                        networking courses offered at R.H. King. Shoutout to Mr. Raptu for inspiring me to study 
                        and pass a Cisco certification test, which I did in Grade 12. I am also glad that I learned
                        the fundamentals of programming there, because they have stuck with me ever since! I didn't 
                        realize how good the curriculum was at R.H. King until I started college. I wish I took my 
                        studies more seriously while I was there.    
                    </p>
                </div>
                <figure className="horizontalSectionSidebarRightElement"> 
                    <img src ={RH_KingAcademy}/>
                    <figcaption>
                        Ahmed, J. (2024). King’s calendar change causes distress among students. Kingsley Voice. <a href="https://kingsleyvoice.com/9388/king-life/kings-calendar-change-causes-distress-among-students/">
                        https://kingsleyvoice.com/9388/king-life/kings-calendar-change-causes-distress-among-students/</a>
                    </figcaption>
                </figure>    
            </div>
        </div>    
    );
}         