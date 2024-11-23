import { Schema, model } from 'mongoose';

// A SCHEMA BLUEPRINT
export const UserSchema = new Schema(
{
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    contact: { type: String, required: false },
    dateOfBirth: { type: Date, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: Boolean, required: true, },
},
{
    timestamps: true,   // Adds Created-At & Updated-At
}
);

export const User = model('User', UserSchema); // Exporting To Recieve It In Service