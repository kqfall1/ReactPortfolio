import projectModel from '../db/models/project_model.js';
import errorHandler from './error_controller.js'; 
import extend from 'lodash/extend.js'; 

const create = async (req, res) => {
    const project = new projectModel(req.body);   

    try {
        await project.save();
        return res.status(200).json({message: "Successfully created a project!"}); 
    } 
    catch (err) {
        return res.status(400).json({error: errorHandler(err)})
    }
}

const list = async (req, res) => {
    try {
        let projects = await projectModel.find().select(
            'completed createdAt description title updatedAt'
        );

        res.json(projects);
    }
    catch (err) {
        return res.status(400).json({error: errorHandler(err)});
    }
}

const projectByID = async (req, res, next, id) => {
    try {
        let project = await projectModel.findById(id); 

        if (!project)
            return res.status('400').json({error: "Project not found"}); 

        req.profile = project; 
        next(); 
    } 
    catch (err) {
        return res.status('400').json({error: "Could not retrieve project"}); 
    }
}

const read = (req, res) => {
    return res.json(req.profile);
}

const remove = async (req, res) => {
    try {
        let project = req.profile;
        let deletedProject = await project.deleteOne();
        res.json(deletedProject);
    } catch (err) {
        return res.status(400).json({error: errorHandler(err)});
    }
}

const removeAll = async (req, res) => {
    try {
        await projectModel.deleteMany({});
        res.status(200).json({message: "All projects have been deleted!"});
    }
    catch (err) {
        return res.status(400).json({error: errorHandler(err)});
    }
}

const update = async (req, res) => {
    try {
        let project = req.profile;
        project = extend(project, req.body);
        await project.save();
        res.json(project);
    }
    catch (err) {
        return res.status(400).json({error: errorHandler(err)});
    }
}

export default { create, list, projectByID, read, remove, removeAll, update }