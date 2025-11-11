import { create } from '../../../lib/api_crud.js'; 
import { useState } from 'react'; 
import '../../styles/Form.css'; 

export default function CreateProjectForm() {
    const [formData, setFormData] = useState({
        completed: '',
        description: '',
        title: ''
    })

    const submission = async (e) => {
        e.preventDefault();

        try {
            await create(
                '/api/projects', 
                { t: JSON.parse(localStorage.getItem('jwt')) }, 
                formData
            )

            setFormData({
                completed: '',
                description: '',
                title: ''
            })

            window.alert('You have successfully added a project entry!');
        }
        catch (err) {
            window.alert(err)
        }
    }

    return (
        <>
            <h2>Add Project Entry</h2>
            <form className="createProjectForm" onSubmit={submission}>
                <label htmlFor="projectTitleInput">Title:</label>
                <input 
                    id="projectTitleInput"
                    type="text"
                    placeholder="Health Home"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title : e.target.value})}
                    required
                    autoFocus
                /> 
                <label htmlFor="projectCompletedInput">Completed:</label>
                <input 
                    id="projectCompletedInput" 
                    type="Date"
                    placeholder="2022-01-01"
                    value={formData.completed}
                    onChange={(e) => setFormData({ ...formData, completed : e.target.value})}
                    required
                /><br />
                <label htmlFor="projectDescriptionInput">Description:</label>
                <textarea
                    id="projectDescriptionInput"
                    placeholder="A web application that allows users to track their health metrics over time."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description : e.target.value})}
                    required
                />
                <br />
                <button id="submit">Add Project Entry</button>
            </form> 
        </>
    )
}