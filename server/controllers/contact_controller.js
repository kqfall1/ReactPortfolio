import contactModel from '../db/models/contact_model.js';
import errorHandler from './error_controller.js'; 
import extend from 'lodash/extend.js'; 

const contactByID = async (req, res, next, id) => {
    try {
        let contact = await contactModel.findById(id); 

        if (!contact)
            return res.status(400).json({error: "Contact not found"}); 

        req.profile = contact; 
        next(); 
    } 
    catch (err) {
        return res.status(400).json({error: "Could not retrieve contact"}); 
    }
}

const create = async (req, res) => {
    const contact = new contactModel(req.body);   

    try {
        await contact.save();
        return res.status(201).json({message: "Successfully contacted the administrator!"}); 
    } 
    catch (err) {
        return res.status(400).json({error: errorHandler(err)})
    }
}

const list = async (req, res) => {
    try {
        let contacts = await contactModel.find().select(
            'createdAt email firstname lastname message phone updatedAt'
        );

        res.status(200).json(contacts);
    }
    catch (err) {
        return res.status(400).json({error: errorHandler(err)});
    }
}

const read = (req, res) => {
    return res.status(200).json(req.profile);
}

const remove = async (req, res) => {
    try {
        let contact = req.profile;
        let deletedContact = await contact.deleteOne();
        res.status(200).json(deletedContact);
    } catch (err) {
        return res.status(400).json({error: errorHandler(err)});
    }
}

const removeAll = async (req, res) => {
    try {
        await contactModel.deleteMany({}); 
        res.status(200).json({message: "All contacts have been deleted."});
    }
    catch (err) {
        return res.status(400).json({error: errorHandler(err)});
    }
}

const update = async (req, res) => {
    try {
        let contact = req.profile;
        contact = extend(contact, req.body);
        await contact.save();
        res.status(200).json(contact);
    }
    catch (err) {
        return res.status(400).json({error: errorHandler(err)});
    }
}

export default { contactByID, create, list, read, remove, removeAll, update }