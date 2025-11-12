import mongoose from 'mongoose'; 

const projectSchema = new mongoose.Schema({
    description: {
        type: String,
        trim: true,
        maxlength: 1024
    },

    end: {
        type: Date, 
        validate: {
            validator: function(value) {
                return value >= this.start;
            }, 
            message: 'End date must be greater than or equal to start date.'
        } 
    },

    photoPath: {
        type: String, 
        required: 'Project photo path is required',
        trim: true,
        maxlength: 128, 
        minlength: 1
    }, 

    projectLink: {
        type: String,
        required: 'Project link is required',
        trim: true,
        maxlength: 256,
        minlength: 8
    },

    start: {
        type: Date, 
        required: 'Project start date is required',
    },
    
    title: {
        type: String,
        required: 'Project title is required',
        trim: true,
        maxlength: 64, 
        minlength: 2
    }
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);