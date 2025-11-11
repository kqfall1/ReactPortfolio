import { create } from '../../../lib/api_crud.js'; 
import { useState } from 'react'; 
import '../../styles/Form.css'; 

export default function CreateEducationForm() {
    const [formData, setFormData] = useState({
        completed: null, 
        description: '', 
        title: '',
    })  

    const submission = async (e) => {
        e.preventDefault();

        try {
            await create(
                '/api/educations', 
                { t: JSON.parse(localStorage.getItem('jwt')) }, 
                formData
            );

            setFormData({
                completed: null, 
                description: '', 
                title: '',
            });

            window.alert('You have successfully added an education entry!');
        }
        catch (err) {
            window.alert(err)
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
                <label htmlFor="educationCompletedInput">Completed:</label>
                <input 
                    id="educationCompletedInput" 
                    type="Date"
                    placeholder="2022-01-01"
                    value={formData.completed}
                    onChange={(e) => setFormData({ ...formData, completed : e.target.value})}
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