const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

    username: {
        type: String,
        trim: true,
        maxlength: 50,
        required: true
    },

    email: {
        type: String,
        trim: true,
        maxlength: 100,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    
    role: {
        type: String,
        // enum: ["user", "admin", "technicien"],
        default: "user"
      }

}, 
{
    versionKey: false
})

module.exports = mongoose.model('Users', userSchema)