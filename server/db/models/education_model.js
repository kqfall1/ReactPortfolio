import mongoose from 'mongoose'; 

const educationSchema = new mongoose.Schema({
    description: {
        type: String,
        trim: true,
        maxlength: 1024, 
        minlength: 16,
        required: 'Education description is required'
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

    location: {
        type: String,
        required: 'Education location is required',
        trim: true,
        maxlength: 64,
        minlength: 2
    }, 

    start: {
        type: Date,
        required: 'Education start date is required',
    },
    
    title: {
        type: String,
        required: 'Education title is required',
        trim: true,
        maxlength: 64,
        minlength: 2
    }, 
}, { timestamps: true }); 

export default mongoose.model('Education', educationSchema);