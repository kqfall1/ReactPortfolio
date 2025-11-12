import mongoose from 'mongoose'; 

const contactSchema = new mongoose.Schema({
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

    lastname : {
        type: String,
        required: 'Last name is required',
        trim: true,
        maxlength: 32, 
        minlength: 2
    }, 

    message: {
        type: String,
        required: 'Message is required',
        trim: true,
        maxlength: 1024,
        minlength: 8
    }, 

    phone: {
        type: String,
        trim: true, 
        required: 'Phone number is required',
        maxlength: 20, 
        minlength: 7,
        match: [/^\+?[0-9\s\-().]{7,20}$/, 'Please enter a valid phone number']
    }
}, {timestamps: true}); 

export default mongoose.model('Contact', contactSchema);