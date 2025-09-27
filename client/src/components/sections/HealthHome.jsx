import '../styles/HealthHome.css'; 
import HealthHomeLandingPage from '../../assets/HealthHomeLandingPage.jpeg'; 

export default function HealthHome() { 
    return ( 
        <div className="healthHome">
            <h2 className="sectionH2"><a href="https://github.com/kqfall1/HealthHomeWebApplication">
            Health Home Web Application</a></h2>
            <div className="horizontalSectionSidebar">
                <img src={HealthHomeLandingPage} alt="One of the landing pages for Health Home"/>
                <p className="horizontalSectionSidebarRightElement">
                    Health Home is a web application where athletes, gym-goers are provided useful 
                    functionalities for keeping track of their health. Athletes and gym-goers can 
                    track their workout and diet histories as well as use various fitness calculators. 
                    Trainers and athletes can collaborate on the platform so that athletes can further 
                    achieve their goals.
                </p>
            </div>
        </div>
    )
}