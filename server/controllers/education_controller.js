import educationModel from '../db/models/education_model.js';
import errorHandler from './error_controller.js'; 
import extend from 'lodash/extend.js'; 

const create = async (req, res) => {
    const education = new educationModel(req.body);

    try {
        await education.save();
        return res.status(201).json({message: "Successfully created an education!"}); 
    }
    catch (err) {
        return res.status(400).json({error: errorHandler(err)})
    } 
}

const educationByID = async (req, res, next, id) => {
    try {
        let education = await educationModel.findById(id); 

        if (!education)
            return res.status(400).json({error: "Education not found"}); 

        req.profile = education; 
        next(); 
    } 
    catch (err) {
        return res.status(400).json({error: "Could not retrieve education"}); 
    }
}

const list = async (req, res) => {
    try {
        let educations = await educationModel.find().select(
            'completed createdAt description title updatedAt'
        );

        res.status(200).json(educations);
    }
    catch (err) {
        return res.status(400).json({error: errorHandler(err)});
    }
}

const read = (req, res) => {
    return res.json(req.profile);
}

const remove = async (req, res) => {
    try {
        let education = req.profile;
        let deletedEducation = await education.deleteOne();
        res.status(200).json(deletedEducation);
    } catch (err) {
        return res.status(400).json({error: errorHandler(err)});
    }
}

/**
 * Removes all educations if no IDs are specified in the "ids" field of the request body. 
 * If IDs are specified, only those educations are removed.
 * @param {Request} req A request that should either contain a "confirm" field set to "true"
 * or an "ids" field containing an array of education IDs for deletion.
 */
const removeMany = async (req, res) => {
    const confirm = req.body.confirm;
    const ids = req.body.ids;
    
    try {
        if (!ids && confirm) { 
            await educationModel.deleteMany({});
            return res.status(200).json({message: "All educations have been deleted."});
        }
        else if (ids) {
            await educationModel.deleteMany({_id: { $in: ids }});
            return res.status(200).json({message: "Specified educations have been deleted."});
        }
        else {
            return res.status(400).json({error: "No educations were deleted. Please either provide IDs or confirm deletion of all educations."});
        }
    }
    catch (err) {
        return res.status(400).json({error: errorHandler(err)});
    }
}

const update = async (req, res) => {
    try {
        let education = req.profile;
        education = extend(education, req.body);
        await education.save();
        res.status(200).json(education);
    }
    catch (err) {
        return res.status(400).json({error: errorHandler(err)});
    }
}

export default { create, educationByID, list, read, remove, removeMany, update }