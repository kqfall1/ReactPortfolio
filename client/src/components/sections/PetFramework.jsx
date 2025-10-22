import '../../styles/PetFramework.css'; 
import PetFrameworkUseCase from '../../assets/PetFrameworkUseCase.JPG'; 

export default function PetFramework() { 
    return ( 
        <div className="petFramework"> 
            <h2 className="sectionH2"><a href="https://github.com/kqfall1/PetFrontendFramework" 
            target="_blank">
            Pet Frontend Framework</a></h2>
            <div className="horizontalSectionSidebar">
                <p> 
                    In this project, I have engineered my own, custom frontend framework! I 
                    challenged myself to do this to learn more about OOP after becoming 
                    enthralled by OOP theory thanks to one of my favorite professors of all 
                    time. This was more complicated than I thought it would be! However, I am 
                    glad that I took on the challenge, fought through the bugs, and learned 
                    not only about using APIs but also about how frontend frameworks actually 
                    work underneath the hood. I am starting to see how powerful OOP really is. 
                    This project taught me that OOP is useful in frontend contexts and not just 
                    backend contexts.
                </p>
                <img src={PetFrameworkUseCase} alt="A breed information and photo fetching component
                 of my webpage" className="horizontalSectionSidebarRightElement"/>
            </div>
        </div>
    )
}