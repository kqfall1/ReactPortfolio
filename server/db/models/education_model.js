import mongoose from 'mongoose'; 

const educationSchema = new mongoose.Schema({
    completed: {
        type: Date,
        default: null
    },

    description: {
        type: String,
        trim: true,
        maxlength: 1024
    },
    
    title: {
        type: String,
        required: 'Education title is required',
        trim: true,
        maxlength: 64
    }, 
}, { timestamps: true }); 

export default mongoose.model('Education', educationSchema);