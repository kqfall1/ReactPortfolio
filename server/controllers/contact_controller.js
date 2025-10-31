import contactModel from '../db/models/contact_model.js';
import errorHandler from './error_controller.js'; 
import extend from 'lodash/extend.js'; 

const emailRegex = /^[a-zA-Z0-9%.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

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
        validate(contact);
        await contact.save();
        return res.status(201).json({message: "Successfully contacted administrators!"}); 
    } 
    catch (err) {
        return res.status(400).json({error: errorHandler(err)})
    }
}

const list = async (req, res) => {
    try {
        const contacts = await contactModel.find().select(
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

/**
 * Removes all contacts if no IDs are specified in the "ids" field of the request body. 
 * If IDs are specified, only those contacts are removed.
 * @param {Request} req A request that should either contain a "confirm" field set to "true"
 * or an "ids" field containing an array of contact IDs deletion.
 */
const removeMany = async (req, res) => {
    const { confirm, ids } = req.body;
    
    try {
        if (!ids && confirm) {
            await contactModel.deleteMany({});
            return res.status(200).json({message: "All contacts have been deleted."});
        }
        else if (ids) {
            await contactModel.deleteMany({_id: { $in: ids }});
            return res.status(200).json({message: "Specified contacts have been deleted."});
        }
        else {
            return res.status(400).json({error: "No contacts were deleted. Please either provide IDs or confirm deletion of all contacts."});
        }
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

function validate(contact) {
    if (emailRegex && !emailRegex.test(contact.email)) {
        throw new Error(`Invalid email format for "${contact.email}".`); 
    }

    else if (phoneRegex && !phoneRegex.test(contact.phone)) {
        throw new Error(`Invalid phone number format for "${contact.phone}".`);
    } 
}

export default { contactByID, create, list, read, remove, removeMany, update }