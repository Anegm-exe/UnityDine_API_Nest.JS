import { Schema, model } from 'mongoose';

export const SeatingSchema = new Schema(
    {
        _Tid: { type: Number, required: true },
        Capacity: { type: Number, required: true},
        Available: { type: Boolean, required: true}
       
    },
    {
        timestamps: true,   // Adds Created-At & Updated-At
    }
    );
    
    export const Seating = model('Seating', SeatingSchema); // Exporting To Recieve It In Service