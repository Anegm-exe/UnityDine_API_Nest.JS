const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    contact: { type: String, required: true },
    dateOfBirth: { type: Date, required: true }, 
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { 
        type: String, 
        required: true, 
        enum: ['Admin', 'Client']
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
