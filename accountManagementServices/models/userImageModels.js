const mongoose = require('mongoose');

// UserImage Schema
const userImageSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    contentType: {
        type: String,
        required: true
    },
    imageBase64: {
        type: String,
        required: true
    }
});

// Create UserImage
const UserImage = new mongoose.model('UserImage', userImageSchema);

module.exports = UserImage;
