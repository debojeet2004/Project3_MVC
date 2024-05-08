const mongoose = require('mongoose');

const User_Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});


const User_Model = mongoose.model('users', User_Schema);

module.exports = User_Model;