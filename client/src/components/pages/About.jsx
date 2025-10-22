import '../../styles/About.css';

import Footer from '../sections/Footer.jsx'; 
import Headshot from '../../assets/Headshot.jpg';
import Interests from '../sections/Interests.jsx'; 
import Resume from '../../assets/QuinnKeenanResume.pdf';

export default function About () {
    return (
        <>
            <div className="about">
                <h1 className="h1Margins">About Quinn Keenan</h1>
                <div className="horizontalSectionSidebar">
                    <Interests/>
                    <img src={Headshot} alt="Quinn's beautiful face!" 
                    className="horizontalSectionSidebarRightElement" id="headshot"/>
                </div>     
                <p>
                    Here is a <a href={Resume} target="_blank">PDF version of my resume!</a> Feel 
                    free to contact me any day or night if you are interested in what I have to 
                    offer! 
                </p>
            </div>
            <Footer/>
        </>
    )
}