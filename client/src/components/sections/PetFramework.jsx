import '../styles/PetFramework.css'; 
import PetFrameworkUseCase from '../../assets/PetFrameworkUseCase.jpg'; 

export default function PetFramework() { 
    return ( 
        <div className="petFramework"> 
            <h2><a href="https://github.com/kqfall1/PetFrontendFramework">Pet Frontend Framework</a></h2>
            <div className="petFrameworkContent">
                <p id="petFrameworkDescription"> 
                    I engineered my own frontend framework out of inspiration of React.js for a pet-themed 
                    webpage that utilizes 4 different APIs.
                </p>
                <img src={PetFrameworkUseCase} alt="A breed information and photo fetching component of my webpage"/>
            </div>
        </div>
    )
}