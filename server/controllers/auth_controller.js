import config from './../../config/config.js'
import { expressjwt } from 'express-jwt';
import jwt from 'jsonwebtoken';
import userModel from '../db/models/user_model.js'; 

/**
 * Checks if the authenticated user is authorized to access or modify a database 
 * entry. 
 * @returns True if the authenticated user is the owner of the database entry or an 
 * administrator; otherwise, returns false.
 */
const hasAuthorization = (req, res, next) => {
    const isOwner = req.profile && req.profile._id.toString() === req.auth._id;

    if (!isOwner && (!req.auth || !req.auth.isAdmin)) {
        return res.status(403).json({ error: "User is not authorized" });
    }

    next(); 
}

/**
 * Checks if the authenticated user is an administrator.
 * @returns True if the authenticated user is an administrator; otherwise, false.
 */
const requireAdmin = (req, res, next) => {
    if (!req.auth || !req.auth.isAdmin) { 
        return res.status(403).json({ error: "User is not authorized as an administrator" });
    }

    next(); 
}

const requireSignin = expressjwt({
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

export default { requireAdmin, requireSignin, signin, signout, hasAuthorization }