const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide name'],
        maxlength: 50,
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please provide email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide valid email',
        },
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 6,
    }
});

const User = mongoose.model('User', UserSchema);
module.exports ={User}