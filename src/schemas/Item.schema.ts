import { Schema, model } from 'mongoose';

// Enum for Item Types
enum ItemType {
  food = 'food',
  drink = 'drink',
  dessert = 'dessert',
}

export const ItemSchema = new Schema({
    _id: { type: Number, required: true },
    _Rid: { type: Number, required: true },
    name : { type: [String], required: true }, 
    type: { 
        type: [String], 
        enum: Object.values(ItemType), 
        required: true 
    },  
    description: { type: [String], required: true }, 
    price: { type: [Number], required: true },
    available: { type: [Boolean], required: true }, 
},
    {
        timestamps: true, 
    }
);

export const Item = model('Item', ItemSchema);
