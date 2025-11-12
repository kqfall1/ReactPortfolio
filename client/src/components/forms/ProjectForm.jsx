import { create } from '../../../lib/api_crud.js'; 
import { useState } from 'react'; 
import '../../styles/Form.css'; 

export default function CreateProjectForm() {
    const [formData, setFormData] = useState(INITIAL_STATE)

    const _formData = {
        ...formData, 
        start: new Date(formData.start),
        end: formData.end ? new Date(formData.end) : null,
    }

    const submission = async (e) => {
        e.preventDefault();

        try {
            const project = await create(
                '/api/projects', 
                { t: JSON.parse(localStorage.getItem('jwt')) }, 
                _formData
            )

            if (!project || project.error) {
                window.alert('Failed to create project entry.');
            }
            else {
                setFormData(INITIAL_STATE);
                window.alert('You have successfully added a project entry!');
            }
        }
        catch (err) {
            console.log(err)
            window.alert('An unexpected error occurred. Please try again later.');
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
                <label htmlFor="projectLinkInput">Project Link:</label>
                <input 
                    id="projectLinkInput"
                    type="text"
                    placeholder="htttps://github.com/kqfall1/ReactPortfolio"
                    value={formData.projectLink}
                    onChange={(e) => setFormData({ ...formData, projectLink : e.target.value})}
                    required
                /><br />
                <label htmlFor="projectStartInput">Start:</label>
                <input 
                    id="projectStartInput"
                    type="date"
                    placeholder="2022-01-01"
                    value={formData.start}
                    onChange={(e) => setFormData({ ...formData, start : e.target.value})}
                    required
                />
                <label htmlFor="projectEndInput">End:</label>
                <input
                    id="projectEndInput"
                    type="date"
                    placeholder="2022-12-31"    
                    value={formData.end}
                    onChange={(e) => setFormData({ ...formData, end : e.target.value})}
                /><br />
                <label htmlFor="projectPhotoPathInput">Photo Path:</label>
                <input
                    id="projectPhotoPathInput"
                    type="text"
                    placeholder="../../assets/healthhome.png"
                    value={formData.photoPath}
                    onChange={(e) => setFormData({ ...formData, photoPath : e.target.value})}
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
                <button className="submit">Add Project Entry</button>
            </form> 
        </>
    )
}

const INITIAL_STATE = {
    description: '',
    end: '', 
    photoPath: '', 
    projectLink: '',
    start: '',
    title: ''
}