const mongoose = require('mongoose')

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname: {
           type: String,
        required: true,
        minlength: [3, "Firstname must be at least3 characters long"] 
        },
         lastname: {
        type: String,
        minlength: [3, "Lastname must be at least 3 characters long"]
    }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: ['please enter a valid email']
    }
   
})