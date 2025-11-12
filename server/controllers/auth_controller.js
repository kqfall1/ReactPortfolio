import config from './../../config/config.js'
import { expressjwt } from 'express-jwt';
import jwt from 'jsonwebtoken';
import userModel from '../db/models/user_model.js'; 

/**
 * Determines if the current user is currently signed in as an administrator.
 * @returns True if the user is signed in as an administrator; otherwise, false.
 */
const isAdmin = (req) => {
    return req.auth && req.auth.isAdmin;
}

/**
 * Checks if the authenticated user is an administrator.
 * @returns A 200 OK response if the user is an administrator and a 
 * 403 error response otherwise. 
 */
const requireAdmin = (req, res, next) => {
    if (!isAdmin(req)) { 
        return res.status(403).json({ error: "User is not authenticated as an administrator" });
    }

    next(); 
}

/**
 * Checks if the authenticated user is an administrator or the owner of the user entry in
 * the database. This method should only be invoked for users and userController.userById
 * should be mounted first by the router method that invokes this method.
 * @returns True if the authenticated user is the owner of the database entry or an 
 * administrator; otherwise, returns false.
 */
const requireAuthorization = (req, res, next) => {
    const isOwner = req.profile && req.profile._id.toString() === req.auth._id;
    
    if (!isOwner && !isAdmin(req)) { 
        return res.status(403).json({ error: "User is not authorized" });
    }

    next(); 
}

const requireSignIn = expressjwt({
    secret: config.jwtSecret,
    algorithms: ['HS256'],
    userProperty: 'auth'
}); 

const signin = async (req, res) => {
    try {
        const user = await userModel.findOne({ "email": req.body.email })

        if (!user)
            return res.status(401).json({ error: "User not found" })
        if (!user.authenticate(req.body.password)) {
            return res.status(401).send({ error: "Email and password don't match." })
        }
        
        const token = jwt.sign({
            _id: user._id, 
            isAdmin: user.isAdmin
        }, config.jwtSecret); 

        res.cookie('t', token, { expire: new Date() + 9999 })
        return res.json({
            token,
            foundUser: {
                _id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email
            }
        })
    } 
    catch (err) {
        return res.status(401).json({ error: err.message })
    }
}

const signout = (req, res) => {
    res.clearCookie('t')
    return res.status(200).json({ message: "Signed out successfully!" })
}

export default { requireAdmin, requireAuthorization, requireSignIn, signin, 
               signout }