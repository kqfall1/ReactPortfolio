import mongoose from 'mongoose'; 

const projectSchema = new mongoose.Schema({
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
        required: 'Project title is required',
        trim: true,
        maxlength: 64
    }
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);