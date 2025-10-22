import mongoose from 'mongoose'; 

const contactSchema = new mongoose.Schema({
    email: {
        type: String,
        required: 'Email is required',
        trim: true,
        maxlength: 32
    }, 
    
    firstname: {
        type: String,
        required: 'First name is required',
        trim: true,
        maxlength: 32
    }, 

    lastname : {
        type: String,
        required: 'Last name is required',
        trim: true,
        maxlength: 32
    }, 

    message: {
        type: String,
        required: 'Message is required',
        trim: true,
        maxlength: 1024
    }, 

    phone: {
        type: String,
        maxlength: 15, 
        required: 'Phone number is required',
        trim: true,
    }
}, {timestamps: true}); 

export default mongoose.model('Contact', contactSchema);