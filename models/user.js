const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    email:{
        type: String,
    },
    mobile:{
        type: String
    },
    address:{
        type: String,
        required: true
    },
    aadharCard:{
        type: Number,
        required: true,
        unqiue: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['voter', 'admin'],
        default: 'voter'
    },
    isVoted:{
        type: Boolean,
        default: false
    }
})

const User = mongoose.model('User', UserSchema)
module.exports = User