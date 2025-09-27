import Costco from './Costco.jsx'; 
import McDonalds from './McDonalds.jsx'; 

export default function WorkExperience() { 
    return (
        <div className="workExperience">
            <h1 className="h1Margins">Work Experience</h1>
            <Costco/>
            <McDonalds/>
        </div>
    );
}