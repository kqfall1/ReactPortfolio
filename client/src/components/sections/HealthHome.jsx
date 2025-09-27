import '../../styles/HealthHome.css'; 
import HealthHomeLandingPage from '../../assets/HealthHomeLandingPage.jpeg'; 

export default function HealthHome() { 
    return ( 
        <div className="healthHome">
            <h2 className="sectionH2"><a href="https://github.com/kqfall1/HealthHomeWebApplication" 
            target="_blank">Health Home Web Application</a></h2>
            <div className="horizontalSectionSidebar">
                <img src={HealthHomeLandingPage} alt="One of the landing pages for Health Home"/>
                <p className="horizontalSectionSidebarRightElement">
                    Health Home is a web application where athletes, gym-goers are provided useful 
                    functionalities for keeping track of their health. Athletes and gym-goers can 
                    track their workout and diet histories as well as use various fitness calculators. 
                    Trainers and athletes can collaborate on the platform so that athletes can further 
                    achieve their goals. This project was developed by a small team and the minimum 
                    value product contained over 30 user stories. The team utilized the Scrum agile 
                    framework for iterative development and used Jira to manage the project and divide 
                    its labour amongst the team’s members.
                </p>
            </div>
        </div>
    )
}