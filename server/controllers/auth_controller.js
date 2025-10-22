import { config, dbAdminId } from './../../config/config.js'
import { expressjwt } from 'express-jwt';
import jwt from 'jsonwebtoken';
import useModel from '../db/models/userModel.js'; 

//Filters out clients who are not administrators or the owner of a resource
const hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id.toString() === req.auth._id;

    if (!authorized && !_isAdmin(req)) {
        return res.status(403).json({ error: "User is not authorized" });
    }

    next(); 
}

const isAdmin = (req, res, next) => {
    if (!_isAdmin(req)) { 
        return res.status(403).json({ error: "User is not authorized as an administrator" });
    }

    next(); 
}

const _isAdmin = (req) => { 
    return req.auth && req.auth._id.toString() === dbAdminId;
}

const requireSignin = expressjwt({
    secret: config.jwtSecret,
    algorithms: ['HS256'],
    userProperty: 'auth'
}); 

const signin = async (req, res) => {
    try {
        let user = await useModel.findOne({ "email": req.body.email })

        if (!user)
            return res.status(401).json({ error: "User not found" })
        if (!user.authenticate(req.body.password)) {
            return res.status(401).send({ error: "Email and password don't match." })
        }
        
        const token = jwt.sign({ _id: user._id }, config.jwtSecret)
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

export default { isAdmin, requireSignin, signin, signout, hasAuthorization }