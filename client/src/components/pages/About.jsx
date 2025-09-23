import '../styles/About.css';
import Headshot from '../../assets/Headshot.jpg';
import Interests from '../sections/Interests.jsx'; 
import Footer from '../sections/Footer.jsx'; 
import Resume from '../../assets/QuinnKeenanResume.pdf';

export default function About () {
    return (
        <>
            <div className="about">
                <h1>About Quinn Keenan</h1>
                <div className="aboutMainContent">
                    <Interests />
                    <img src={Headshot} alt="Quinn's beautiful face!"/>
                </div>     
                <p id="resumeLink">
                    Here is a <a href={Resume}>PDF version of my resume!</a> Feel free to contact me any day 
                    or night if you are interested in what I have to offer! 
                </p>
            </div>
            <Footer />
        </>
    )
}