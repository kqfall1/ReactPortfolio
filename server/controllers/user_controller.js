import errorHandler from './error_controller.js'; 
import extend from 'lodash/extend.js'; 
import userModel from '../db/models/userModel.js'; 

const create = async (req, res) => {
    const user = new userModel(req.body); 

    try {
        await user.save(); 
        return res.status(201).json({message: "Successfully signed up!"}); 
    } 
    catch (err) {
        return res.status(400).json({error: errorHandler(err)})
    }
}

const list = async (req, res) => {
    try {
        let users = await userModel.find().select(
            'createdAt email firstname lastname updatedAt username'
        );

        res.json(users); 
    } 
    catch (err) {
        return res.status(400).json({error: errorHandler(err)}); 
    }
}

const read = (req, res) => {
    req.profile.hashed_password = undefined; 
    req.profile.salt = undefined; 
    return res.json(req.profile); 
}

const remove = async (req, res) => {
    try {
        let user = req.profile;
        let deletedUser = await user.deleteOne();
        deletedUser.hashed_password = undefined;
        deletedUser.salt = undefined;
        res.json(deletedUser);
    } catch (err) {
        return res.status(400).json({error: errorHandler(err)});
    }
}

const removeAll = async (req, res) => {
    try {
        await userModel.deleteMany({});
        res.status(200).json({message: "All users have been removed."});
    }
    catch (err) {
        return res.status(400).json({error: errorHandler(err)});
    }
}

const update = async (req, res) => {
    try {
        let user = req.profile;
        user = extend(user, req.body);
        await user.save();
        user.hashed_password = undefined;
        user.salt = undefined;
        res.json(user);
    } 
    catch (err) {
        return res.status(400).json({error: errorHandler(err)});
    }
}

const userByID = async (req, res, next, id) => {
    try {
        let user = await userModel.findById(id); 

        if (!user)
            return res.status(400).json({error: "User not found"}); 

        req.profile = user; 
        next(); 
    } 
    catch (err) {
        return res.status(400).json({error: "Could not retrieve user"}); 
    }
}

export default { create, list, read, remove, removeAll, update, userByID }; 