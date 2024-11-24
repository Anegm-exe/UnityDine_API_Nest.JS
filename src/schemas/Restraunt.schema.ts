import { Schema, model } from 'mongoose';

export const RestrauntSchema = new Schema(
    {
        _Rid: { type: Number, required: true },
        Name: { type: String, required: true },
        Location: { type: String, required: true },
        Contact: { type: Number, required: true },
        Rating: { type: Number, required: true },
    }

);

export const Restraunt = model('Restraunt', RestrauntSchema); // Exporting To Recieve It In Service