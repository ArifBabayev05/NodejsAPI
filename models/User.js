const mongoose = require('mongoose');

const userScheme = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    },
    phoneNumber: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
})
module.exports = mongoose.model("User", userScheme)
