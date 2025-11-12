import { create } from '../../../lib/api_crud.js'; 
import { useState } from 'react'; 
import '../../styles/Form.css'; 

export default function EducationForm() {
    const [formData, setFormData] = useState(INITIAL_STATE)

    const _formData = {
        ...formData, 
        start: new Date(formData.start),
        end: formData.end ? new Date(formData.end) : null,
    }

    const submission = async (e) => {
        e.preventDefault();

        try {
            const education = await create(
                '/api/educations', 
                { t: JSON.parse(localStorage.getItem('jwt')) }, 
                _formData
            );

            if (!education || education.error) {
                window.alert('Failed to create education entry.');
            }
            else {
                setFormData(INITIAL_STATE);
                window.alert('You have successfully added an education entry!');
            } 
        }
        catch (err) {
            console.log(err)
            window.alert("An unexpected error occurred. Please try again later.")
        }
    } 

    return (
        <>
            <h2>Add Education Entry</h2>
            <form className="createEducationForm" onSubmit={submission}>
                <label htmlFor="educationTitleInput">Title:</label>
                <input 
                    id="educationTitleInput"
                    type="text"
                    placeholder="Bachelor of Science in Computer Science"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title : e.target.value})}
                    required
                    autoFocus
                />
                <label htmlFor="educationLocationInput">Location:</label>
                <input 
                    id="educationLocationInput"
                    type="text"
                    placeholder="University of Toronto"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location : e.target.value})}
                    required
                /><br /> 
                <label htmlFor="educationStartInput">Start:</label>
                <input 
                    id="educationStartInput" 
                    type="date"
                    value={formData.start}
                    onChange={(e) => setFormData({ ...formData, start : e.target.value})}
                    required
                />
                <label htmlFor="educationEndInput">End:</label>
                <input 
                    id="educationEndInput" 
                    type="date"
                    value={formData.end}
                    onChange={(e) => setFormData({ ...formData, end : e.target.value})}
                /><br />
                <label htmlFor="educationPhotoPathInput">Photo Path:</label>
                <input 
                    id="educationPhotoPathInput"
                    type="text"
                    placeholder="../../assets/university.png"
                    value={formData.photoPath}
                    onChange={(e) => setFormData({ ...formData, photoPath : e.target.value})}
                    required
                /><br />
                <label htmlFor="educationDescriptionInput">Description:</label>
                <textarea
                    id="educationDescriptionInput"
                    placeholder="Describe your education experience..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description : e.target.value})}
                    required
                ></textarea><br />
                <button id="submit">Add Education</button>
            </form> 
        </>
    )
}

const INITIAL_STATE = {
    description: '', 
    end: '', 
    location: '', 
    photoPath: '',
    start: '',
    title: '',
}