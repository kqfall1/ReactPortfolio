import errorHandler from './error_controller.js'; 
import extend from 'lodash/extend.js'; 
import userModel from '../db/models/user_model.js'; 

/**
 * Creates a new user. If the "isAdmin" field is set to true in the request body,
 * the requester must be an administrator.
 * @throws Error if the requester is not an administrator but attempts to create
 * an administrator user.
 */
const create = async (req, res) => {
    const { firstname, email, isAdmin, lastname, password, username } = req.body;
    let createAdmin = false; 

    if (isAdmin && req.auth?.isAdmin) {
        createAdmin = true; 
    }

    try {
        if (isAdmin && !req.auth?.isAdmin) {
            throw new Error("Only admins can create admin users.");
       }

        const user = new userModel({ 
            firstname, 
            email, 
            isAdmin: createAdmin, 
            lastname, 
            password, 
            username
        }); 

        await user.save(); 
        return res.status(201).json({message: `Successfully created account "${username}"!`}); 
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

/**
 * Removes all non-administrator users only if no IDs are specified in the "ids" field of 
 * the request body. If IDs are specified, only specified, non-administrator users are removed.
 * @param {Request} req A request that should either contain a "confirm" field set to "true"
 * or an "ids" field containing an array of non-administrator user IDs for deletion.
 */
const removeMany = async (req, res) => {
    const { confirm, ids } = req.body;
    
    try {
        if (!ids && confirm) {
            await userModel.deleteMany({
                $or: [
                    { isAdmin: false }, 
                    { isAdmin: { $exists: false } }
                ] 
            });

            res.status(200).json({message: "All non-administrator users have been removed."});
        }
        else if (ids) {
            await userModel.deleteMany({
                $and: [
                    { _id: { $in: ids } },
                    { isAdmin: false }
                ] 
            });

            res.status(200).json({message: "Specified users have been removed."});
        }
        else {
            return res.status(400).json({error: "No users were deleted. Please either provide IDs or confirm deletion of all users."});
        }
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

export default { create, list, read, remove, removeMany, update, userByID }; 