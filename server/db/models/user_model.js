import bcrypt from 'bcrypt';
import mongoose from 'mongoose'; 

const saltFactor = 10; 

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: 'Email is required',
        trim: true,
        maxlength: 32, 
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    }, 
    
    firstname: {
        type: String,
        required: 'First name is required',
        trim: true,
        maxlength: 32, 
        minlength: 2
    }, 

    isAdmin: {
        type: Boolean, 
        default: false
    },

    lastname : {
        type: String,
        required: 'Last name is required',
        trim: true,
        maxlength: 32, 
        minlength: 2
    }, 

    hashed_password: {
        type: String,
        required: 'Password is required', 
        maxlength: 64, 
        minlength: 2
    }, 

    username: {
        type: String,
        required: 'Username is required',
        trim: true,
        unique: true,
        maxlength: 32
    }
}, { timestamps: true }); 

userSchema.methods = {
    authenticate (plainText) {
        return bcrypt.compareSync(plainText, this.hashed_password);
    }
}

userSchema.path('hashed_password').validate(function(v) {
    if (this._password && this._password.length < 6) {
        this.invalidate('password', 'Password must be at least 6 characters.');
    }

    if (this.isNew && !this._password) {
        this.invalidate('password', 'Password is required');
    }
}, null);

userSchema.virtual('password')
    .set(function (password) { 
        this._password = password; 
        this.salt = bcrypt.genSaltSync(saltFactor);
        this.hashed_password = bcrypt.hashSync(password, this.salt);
    })
    .get(function() { 
        return this._password; 
    }); 

export default mongoose.model('User', userSchema); 